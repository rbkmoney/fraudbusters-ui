import { OperationType } from '../../../constants/operation-type';
import { Template } from '../../../../api/fb-management/swagger-codegen/model/template';

export interface CreateTemplateData {
    type: OperationType;
    template: Template;
}
