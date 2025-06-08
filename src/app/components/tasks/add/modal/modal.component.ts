import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'component-tasks-add-modal',
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './modal.component.html',
})
export class ComponentTasksAddModal {

  fecha: string;
  hora: string;
  repeatTask: boolean = false;

  description: boolean = false;
  priority: string = '';

  addParticipants: boolean = false;

  progress: boolean = false;

  constructor() {
    const hoy = new Date();
    this.fecha = hoy.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    this.hora = '23:59'; // 11:59 PM en formato 24h
  }

}
