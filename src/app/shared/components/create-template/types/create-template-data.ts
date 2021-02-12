import { Template } from '../../../../sections/template/types/template';
import { OperationType } from '../../../constants/operation-type';

export interface CreateTemplateData {
    type: OperationType;
    template: Template;
}
