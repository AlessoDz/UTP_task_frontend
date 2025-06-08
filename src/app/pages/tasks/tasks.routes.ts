import { Routes } from '@angular/router';
import { PageTasksDetails } from './details/details-page.component';

export const TASK_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageTasksOverview),
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details-page.component').then(m => m.PageTasksDetails),
  },
];


