import { Routes } from '@angular/router';
import { LayoutMain } from '@layouts/main/main-layout.component';


export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: LayoutMain,
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
        data: { breadcrumb: 'Inicio' }
      },
      {
        path: 'agenda',
        loadChildren: () => import('@pages/agenda/agenda.routes').then(m => m.AGENDA_ROUTES),
        data: { breadcrumb: 'Agenda' }
      },
      {
        path: 'tareas',
        loadChildren: () => import('@pages/tasks/tasks.routes').then(m => m.TASK_ROUTES),
        data: { breadcrumb: 'Tareas' }
      },
      {
        path: 'grupos',
        loadChildren: () => import('@pages/groups/groups.routes').then(m => m.GROUP_ROUTES),
        data: { breadcrumb: 'Grupos' }
      },
      {
        path: 'progreso',
        loadChildren: () => import('@pages/progress/progress.routes').then(m => m.PROGRESS_ROUTES),
        data: { breadcrumb: 'Progreso' }
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('@pages/notifications/notifications.routes').then(m => m.NOTIFICATION_ROUTES),
        data: { breadcrumb: 'Notificaciones' }
      },
      {
        path: 'perfil',
        loadChildren: () => import('@pages/profile/profile.routes').then(m => m.PROFILE_ROUTES),
        data: { breadcrumb: 'Perfil' }
      }
    ]
  }
];
