import { Routes } from '@angular/router';

export const AGENDA_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageAgendaOverview),
  }
];


