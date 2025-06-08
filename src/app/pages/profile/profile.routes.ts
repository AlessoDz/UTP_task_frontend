import { Routes } from '@angular/router';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageProfileOverview),
  }
];


