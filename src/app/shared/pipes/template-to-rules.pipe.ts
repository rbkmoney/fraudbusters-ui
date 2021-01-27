import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'templateToRules',
})
export class TemplateToRulesPipe implements PipeTransform {
    transform(template: string): string[] {
        const rules = template.split('rule:');
        rules.splice(0, 1);
        return [rules.map((r) => `Rule: ${r.split(',').join(', ').split(':').join(': ')}`)[0]];
    }
}
