import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'components-groups-alerts-delete',
  imports: [],
  templateUrl: './delete.component.html',
})
export class ComponentGroupsAlertsDelete {

  constructor(private router: Router) {}

  eliminarGrupo() {
    this.router.navigate(['/dashboard/grupos'], { state: { mensaje: 'El grupo fue eliminado' } });
  }

}
