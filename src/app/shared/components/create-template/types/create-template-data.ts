import { Template } from '../../../../api/fb-management/swagger-codegen/model/template';
import { OperationType } from '../../../constants/operation-type';

export interface CreateTemplateData {
    type: OperationType;
    template: Template;
}
