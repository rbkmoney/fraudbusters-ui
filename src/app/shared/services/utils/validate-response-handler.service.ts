import { Injectable } from '@angular/core';
import { ValidateResponse } from '../../../templates/model/validate-response';

@Injectable({
    providedIn: 'root',
})
export class ValidateResponseHandler {
    constructor() {}

    checkValidateResponse(response: ValidateResponse): string {
        return response.validateResults.length > 0
            ? `${response.validateResults[0].id}: ${response.validateResults[0].errors}`
            : 'All rule success';
    }
}