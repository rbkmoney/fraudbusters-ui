import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

import { progress } from '../../../../operators';
import { OperationTypeManagementService } from '../../../../services/operation-type-management.service';
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
        switchMap(({ type, template }) =>
            this.operationTemplateService.findTemplateService(type).saveTemplate(template)
        ),
        shareReplay(1)
    );

    validated$ = this.validate$.pipe(
        switchMap(({ type, template }) =>
            this.operationTemplateService.findTemplateService(type).validateTemplate(template)
        ),
        shareReplay(1)
    );

    inProgress$ = progress(merge(this.save$, this.validate$), merge(this.saved$, this.validated$));

    form = this.fb.group(TemplateService.defaultParams);

    constructor(private fb: FormBuilder, private operationTemplateService: OperationTypeManagementService) {}

    saveTemplate(data: CreateTemplateData) {
        this.save$.next(data);
    }

    validateTemplate(data: CreateTemplateData) {
        this.validate$.next(data);
    }
}
