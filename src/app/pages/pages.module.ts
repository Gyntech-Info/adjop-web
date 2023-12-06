import { NgModule } from '@angular/core';

import { HomePage } from './home/home.component';
import { RouterModule } from '@angular/router';
import { pagesRoutes } from './pages.routes';

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes), HomePage],
  exports: [HomePage],
})
export class PagesModule { }
