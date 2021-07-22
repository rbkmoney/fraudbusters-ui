import { FocusMonitor } from '@angular/cdk/a11y';
import { Platform } from '@angular/cdk/platform';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, ElementRef, Input, Optional, Self } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FloatLabelType } from '@angular/material/form-field';
import { MatFormFieldAppearance } from '@angular/material/form-field/form-field';
import { debounceTime, shareReplay, switchMap } from 'rxjs/operators';

import { TemplatesService } from '../../../../sections/template/services/templates/templates.service';
import { CustomFormControlComponent } from '../custom-form-control/custom-form-control.component';

@Component({
    selector: 'fb-template-id',
    templateUrl: 'template-id.component.html',
    styleUrls: ['template-id.component.scss'],
    providers: [TemplatesService],
})
export class TemplateIdComponent extends CustomFormControlComponent {
    @Input() floatLabelType: FloatLabelType = 'always';
    @Input() appearanceType: MatFormFieldAppearance = 'legacy';

    templates$ = this.formControl.valueChanges.pipe(
        debounceTime(300),
        switchMap((v) => this.templatesService.getTemplatesName(v)),
        shareReplay(1)
    );

    constructor(
        focusMonitor: FocusMonitor,
        elementRef: ElementRef<HTMLElement>,
        platform: Platform,
        @Optional() @Self() ngControl: NgControl,
        autofillMonitor: AutofillMonitor,
        defaultErrorStateMatcher: ErrorStateMatcher,
        @Optional() parentForm: NgForm,
        @Optional() parentFormGroup: FormGroupDirective,
        private templatesService: TemplatesService
    ) {
        super(
            focusMonitor,
            elementRef,
            platform,
            ngControl,
            autofillMonitor,
            defaultErrorStateMatcher,
            parentForm,
            parentFormGroup
        );
    }
}
