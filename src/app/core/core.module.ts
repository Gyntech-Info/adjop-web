import { NgModule } from '@angular/core';

import { TemplateModule } from "./template/template.module";

@NgModule({
  imports: [
    TemplateModule
  ],
  exports: [
    TemplateModule
  ]
})
export class CoreModule { }
