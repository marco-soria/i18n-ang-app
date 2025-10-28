import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products').then((m) => m.default),
  },
  {
    path: 'basic-plan',
    loadComponent: () =>
      import('./pages/basic-plan/basic-plan').then((m) => m.default),
  },

  {
    path: '**',
    redirectTo: 'products',
  },
];
