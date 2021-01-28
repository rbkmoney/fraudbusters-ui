import { NgModule } from '@angular/core';

import { TemplateToRulesPipe } from './template-to-rules.pipe';

@NgModule({
    declarations: [TemplateToRulesPipe],
    exports: [TemplateToRulesPipe],
})
export class SharedPipesModule {}
