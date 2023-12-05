import { Routes } from '@angular/router';
import { ThailandPrComponent } from './thailand-pr/thailand-pr.component';
import { OystersRiverComponent } from './oysters-river/oysters-river.component';
import { MadalenaComponent } from './madalena/madalena.component';
import { IndiaComponent } from './india/india.component';
import { AutoSanJoseComponent } from './auto-san-jose/auto-san-jose.component';

export const unitsRoutes: Routes = [
  {
    path: 'auto-de-sao-jose',
    component: AutoSanJoseComponent,
  },
  {
    path: 'india',
    component: IndiaComponent,
  },
  {
    path: 'madalena',
    component: MadalenaComponent,
  },
  {
    path: 'rio-das-ostras',
    component: OystersRiverComponent,
  },
  {
    path: 'tailandia-para',
    component: ThailandPrComponent,
  },
];
