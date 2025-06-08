import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentGroupsAdd } from '@components/groups/add/add.component';
import { ComponentGroupsTable } from '@components/groups/table/table.component';
import { LucideAngularModule, Check } from 'lucide-angular';

@Component({
  selector: 'page-tasks-overview',
  imports: [
    CommonModule,
    LucideAngularModule,
    ComponentGroupsTable,
    ComponentGroupsAdd
],
  templateUrl: './overview-page.component.html',
})
export class PageGroupsOverview {

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
