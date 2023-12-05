import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { unitsRoutes } from './units.routes';

import { AutoSanJoseComponent } from './auto-san-jose/auto-san-jose.component';
import { IndiaComponent } from './india/india.component';
import { MadalenaComponent } from './madalena/madalena.component';
import { OystersRiverComponent } from './oysters-river/oysters-river.component';
import { ThailandPrComponent } from './thailand-pr/thailand-pr.component';

@NgModule({
  imports: [
    RouterModule.forChild(unitsRoutes),
    AutoSanJoseComponent,
    IndiaComponent,
    MadalenaComponent,
    OystersRiverComponent,
    ThailandPrComponent,
  ],
  exports: [
    AutoSanJoseComponent,
    IndiaComponent,
    MadalenaComponent,
    OystersRiverComponent,
    ThailandPrComponent,
  ],
})
export class UnitsModule {}
