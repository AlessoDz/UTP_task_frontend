import { Routes } from '@angular/router';

export const PROGRESS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageProgressOverview),
  },
  {
    path: 'puntaje',
    loadComponent: () => import('./points/points-page.component').then(m => m.PageProgressPoints),
  },
  {
    path: 'ciclos',
    loadComponent: () => import('./cycles/cycles-page.component').then(m => m.PageProgressCycles),
  }
];


