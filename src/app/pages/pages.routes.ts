import { Routes } from '@angular/router';
import { HomePage } from './home/home.component';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'unidades',
    loadChildren: () =>
      import('./units/units.module').then((m) => m.UnitsModule),
  },
  {
    path: 'departamentos',
    loadChildren: () =>
      import('./departments/departments.module').then((m) => m.DepartmentsModule),
  },
];
