import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'component-tasks-delete-modal',
  imports: [],
  templateUrl: './delete-modal.component.html',
})
export class ComponentTasksDeleteModal {

  constructor(private router: Router) {}

  eliminarTarea() {
    this.router.navigate(['/dashboard/tareas'], { state: { mensaje: 'La tarea fue eliminada' } });
  }

}