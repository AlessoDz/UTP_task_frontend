import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterModule } from '@angular/router';
import { ComponentSharedSidebar } from '@components/shared/sidebar/sidebar.component';
import { Bell, LucideAngularModule, Menu } from 'lucide-angular';
import { ComponentProfileDropdown } from "@components/profile/dropdown/dropdown.component";
import { ComponentNotificationsDropdown } from '@components/notifications/dropdown/dropdown.component';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { User } from '@interfaces/user.interface';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'layout-main',
  imports: [
    RouterModule, CommonModule,
    LucideAngularModule,
    ComponentSharedSidebar,
    ComponentNotificationsDropdown,
    ComponentProfileDropdown
],
  templateUrl: './main-layout.component.html',
})
export class LayoutMain {

  readonly Bell = Bell;
  readonly Menu = Menu;

  currentSection: string = '';

  constructor(
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit(): void {

    // Ejecutar breadcrumb al iniciar el componente (importante en recarga)
    setTimeout(() => {
      this.updateTitle();
    }, 0);

    // También escuchar cambios en navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => {
        this.updateTitle();
      }, 0);
    });
  }

  private updateTitle(): void {
    const breadcrumb = this.findFirstBreadcrumb(this.router.routerState.root);
    this.currentSection = breadcrumb;
    const fullTitle = breadcrumb ? `UTP+Task :: ${breadcrumb}` : 'UTP+Task';
    this.titleService.setTitle(fullTitle);
  }

  private findFirstBreadcrumb(route: ActivatedRoute): string {
    let current = route;

    while (current.firstChild) {
      current = current.firstChild;
      if (current.snapshot.data['breadcrumb']) {
        return current.snapshot.data['breadcrumb'];
      }
    }

    return '';
  }



}
