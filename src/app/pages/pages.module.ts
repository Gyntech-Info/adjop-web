import { NgModule } from '@angular/core';

import { HomePage } from "./home/home.component";

@NgModule({
  imports: [
    HomePage
  ],
  exports: [
    HomePage
  ]
})
export class PagesModule { }
