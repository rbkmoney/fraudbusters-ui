import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

import { progress } from '../../../../operators';
import { DataSetService } from '../../../../../api/payments/data-set';
import { ApplyRuleOnHistoricalDataSetRequest } from '../../../../../api/fb-management/swagger-codegen/model/applyRuleOnHistoricalDataSetRequest';
import { PaymentTemplatesService } from '../../../../../api';
import { CheckedDataSet } from '../../../../../api/fb-management/swagger-codegen/model/checkedDataSet';

@Injectable()
export class TestingDataSetService {
    static defaultParams = {
        // party: '',
        // shop: '',
        template: '',
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

    testTemplate(templateValue: string, data: CheckedDataSet) {
        this.test$.next({
            dataSetId: +data.testDataSetId,
            template: templateValue,
            records: data.rows.map((value) => value.payment),
        });
    }

    validateTemplate(templateValue: string) {
        this.validate$.next(templateValue);
    }
}
