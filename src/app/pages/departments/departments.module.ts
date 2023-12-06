import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { departmentsRoutes } from './departments.routes';

import { AdjopChildrenComponent } from './adjop-children/adjop-children.component';
import { AdjopFamilyComponent } from './adjop-family/adjop-family.component';
import { AdjopMenComponent } from './adjop-men/adjop-men.component';
import { EphesiansSixComponent } from './ephesians-six/ephesians-six.component';
import { FuAdjopComponent } from './fu-adjop/fu-adjop.component';

@NgModule({
  imports: [
    RouterModule.forChild(departmentsRoutes),
    AdjopChildrenComponent,
    AdjopFamilyComponent,
    AdjopMenComponent,
    EphesiansSixComponent,
    FuAdjopComponent,
  ],
  exports: [],
})
export class DepartmentsModule {}
