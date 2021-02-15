import { ValidationResponse } from '../../../api/fb-management/swagger-codegen/model/validationResponse';

export const checkValidateResponse = (response: ValidationResponse): string =>
    response.errors ? response.errors[0].errorReason : 'All rule success';
