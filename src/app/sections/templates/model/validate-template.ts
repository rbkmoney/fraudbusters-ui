import { Template } from './template';

export interface ValidateTemplate extends Template {
    errors: string[];
}
