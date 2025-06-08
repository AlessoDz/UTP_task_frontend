import { Routes } from '@angular/router';

export const GROUP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageGroupsOverview),
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details-page.component').then(m => m.PageGroupsDetails),
  },
  // {
  //   path: ':id/editar',
  //   loadComponent: () => import('./edit/edit-page.component').then(m => m.PageGroupsEdit),
  // }
];


