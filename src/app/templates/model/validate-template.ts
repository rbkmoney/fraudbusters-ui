import {Template} from './template';

export class ValidateTemplate extends Template {

  errors: string[];

  constructor(id: string, template: string, errors: string[]) {
    super(id, template);
    this.errors = errors;
  }
}
