import { Injectable } from '@angular/core';

import { ValidationResponse } from '../../../api/fb-management/swagger-codegen/model/validationResponse';

@Injectable()
export class ValidateResponseHandler {
    constructor() {}

    checkValidateResponse(response: ValidationResponse): string {
        // TODO what i need to return here?
        return '';
        // return response.result.length > 0
        //     ? `${response.result[0].id}: ${response.errors[0]}`
        //     : 'All rule success';
    }
}
