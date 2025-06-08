import { Routes } from '@angular/router';
import { PageLogin } from '@pages/login/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PageLogin,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@layouts/main/main.routes').then(m => m.MAIN_ROUTES),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
