import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

import { PaymentTemplatesService } from '../../../../../api';
import { progress } from '../../../../operators';
import { CreateTemplateData } from '../../types/create-template-data';

@Injectable()
export class TemplateService {
    static defaultParams = {
        id: '',
        template: '',
    };

    private save$ = new Subject<CreateTemplateData>();
    private validate$ = new Subject<CreateTemplateData>();

    saved$ = this.save$.pipe(
        switchMap(({ template }) => this.paymentTemplatesService.saveTemplate(template)),
        shareReplay(1)
    );

    validated$ = this.validate$.pipe(
        switchMap(({ template }) => this.paymentTemplatesService.validateTemplate(template)),
        shareReplay(1)
    );

    inProgress$ = progress(merge(this.save$, this.validate$), merge(this.saved$, this.validated$));

    constructor(private fb: FormBuilder, private paymentTemplatesService: PaymentTemplatesService) {}

    form = this.fb.group(TemplateService.defaultParams);

    saveTemplate(data: CreateTemplateData) {
        this.save$.next(data);
    }

    validateTemplate(data: CreateTemplateData) {
        this.validate$.next(data);
    }
}
