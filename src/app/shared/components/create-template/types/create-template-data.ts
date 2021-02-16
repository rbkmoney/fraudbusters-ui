import { TemplateModel } from '../../../../api/fb-management/swagger-codegen/model/templateModel';
import { OperationType } from '../../../constants/operation-type';

export interface CreateTemplateData {
    type: OperationType;
    template: TemplateModel;
}
