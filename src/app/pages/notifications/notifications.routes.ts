import { Routes } from '@angular/router';

export const NOTIFICATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageNotificationsOverview),
  }
];


