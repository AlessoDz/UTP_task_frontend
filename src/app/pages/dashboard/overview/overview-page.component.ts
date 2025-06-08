import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentDashboardAgendaToday } from '@components/dashboard/agenda-today/agenda-today.component';
import { ComponentDashboardGroups } from '@components/dashboard/groups/groups.component';
import { ComponentDashboardStats } from "@components/dashboard/stats/stats.component";

@Component({
  selector: 'page-dashboard-overview',
  imports: [
    RouterModule,
    ComponentDashboardStats,
    ComponentDashboardAgendaToday,
    ComponentDashboardGroups
],
  templateUrl: './overview-page.component.html',
})
export class PageDashboardOverview {

  saludo: string = '';

  constructor(
  ) { }

  ngOnInit(): void {
    this.setSaludo();
  }

  setSaludo(): void {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
      this.saludo = 'Buen día';
    } else if (hora >= 12 && hora < 19) {
      this.saludo = 'Buenas tardes';
    } else {
      this.saludo = 'Buenas noches';
    }
  }

}
