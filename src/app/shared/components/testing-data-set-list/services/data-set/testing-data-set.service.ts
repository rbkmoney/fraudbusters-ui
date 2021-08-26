import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

import { PaymentTemplatesService } from '../../../../../api';
import { ApplyRuleOnHistoricalDataSetRequest } from '../../../../../api/fb-management/swagger-codegen/model/applyRuleOnHistoricalDataSetRequest';
import { CheckedDataSet } from '../../../../../api/fb-management/swagger-codegen/model/checkedDataSet';
import { DataSetService } from '../../../../../api/payments/data-set';
import { progress } from '../../../../operators';

@Injectable()
export class TestingDataSetService {
    static defaultParams = {
        party: '',
        shop: '',
        template: '',
        checkingTimestamp: null,
    };

    private test$ = new Subject<ApplyRuleOnHistoricalDataSetRequest>();
    private validate$ = new Subject<string>();

    tested$ = this.test$.pipe(
        switchMap((value) => this.dataSetService.applyRuleOnHistoricalDataSet(value)),
        shareReplay(1)
    );

    validated$ = this.validate$.pipe(
        switchMap((value) =>
            this.paymentTemplatesService.validateTemplate({ id: 'validate_checking_template', template: value })
        ),
        shareReplay(1)
    );

    inProgress$ = progress(merge(this.test$, this.validate$), merge(this.tested$, this.validated$));

    constructor(
        private fb: FormBuilder,
        private dataSetService: DataSetService,
        private paymentTemplatesService: PaymentTemplatesService
    ) {}

    form = this.fb.group(TestingDataSetService.defaultParams);

    testTemplate(
        templateValue: string,
        data: CheckedDataSet,
        ruleSetTimestamp?: Date,
        partyId?: string,
        shopId?: string
    ) {
        this.test$.next({
            dataSetId: +data.testDataSetId,
            template: templateValue,
            records: data.rows.map((value) => value.payment),
            reference: {
                partyId,
                shopId,
            },
            ruleSetTimestamp,
        });
    }

    validateTemplate(templateValue: string) {
        this.validate$.next(templateValue);
    }
}
