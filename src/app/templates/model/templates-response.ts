import { Template } from './template';

export class TemplatesResponse {
    count: number;
    templateModels: Template[];

    constructor(count: number, templateModels: Template[]) {
        this.count = count;
        this.templateModels = templateModels;
    }
}
