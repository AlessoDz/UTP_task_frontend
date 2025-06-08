import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ComponentAgendaCalendar } from '@components/agenda/calendar/calendar.component';
import { ComponentTasksAddModal } from '@components/tasks/add/modal/modal.component';
import { ComponentTasksTable } from '@components/tasks/table/table.component';
import { ArrowLeft, ArrowRight, Calendar1, ChevronDown, LucideAngularModule, Check } from 'lucide-angular';

@Component({
  selector: 'page-tasks-overview',
  imports: [
    LucideAngularModule,
    CommonModule,
    ComponentTasksTable, ComponentTasksAddModal,
    ComponentAgendaCalendar,
],
  templateUrl: './overview-page.component.html',
})
export class PageTasksOverview {

  readonly ArrowLeft = ArrowLeft;
  readonly ArrowRight = ArrowRight;
  readonly Calendar1 = Calendar1;
  readonly ChevronDown = ChevronDown;
  readonly Check = Check;

  mensajeEliminar: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    if (history.state && history.state['mensaje']) {
      this.mensajeEliminar = history.state['mensaje'];

      // Limpia el estado para que no se muestre más en próximas cargas o navegaciones internas
      history.replaceState({}, '');

      setTimeout(() => {
        this.mensajeEliminar = null;
      }, 5000);
    }
  }


}
