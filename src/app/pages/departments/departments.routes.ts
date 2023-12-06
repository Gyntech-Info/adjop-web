import { Routes } from '@angular/router';
import { FuAdjopComponent } from './fu-adjop/fu-adjop.component';
import { EphesiansSixComponent } from './ephesians-six/ephesians-six.component';
import { AdjopMenComponent } from './adjop-men/adjop-men.component';
import { AdjopFamilyComponent } from './adjop-family/adjop-family.component';
import { AdjopChildrenComponent } from './adjop-children/adjop-children.component';

export const departmentsRoutes: Routes = [
  {
    path: 'adjop-criancas',
    component: AdjopChildrenComponent,
  },
  {
    path: 'adjop-familia',
    component: AdjopFamilyComponent,
  },
  {
    path: 'adjop-homens',
    component: AdjopMenComponent,
  },
  {
    path: 'efesios-seis',
    component: EphesiansSixComponent,
  },
  {
    path: 'uniao-feminina-adjop',
    component: FuAdjopComponent,
  },
];
