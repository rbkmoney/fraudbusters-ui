// TODO: use valid codegen model
export const checkValidateResponse = (response: any): string =>
    response.validateResults?.length ? response.validateResults[0].errors[0] : 'All rules is valid';
