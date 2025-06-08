import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, ChevronDown, ChevronUp } from 'lucide-angular';

@Component({
  selector: 'component-tasks-add-form',
  imports: [
    CommonModule, FormsModule,
    LucideAngularModule
  ],
  templateUrl: './add-form.component.html',
})
export class ComponentTasksAddForm {

  fecha: string;
  hora: string;
  repeatTask: boolean = false;
  progress: boolean = false;
  typeTask: string = 'personal';
  typeHour: string = 'alarma';

  readonly ChevronDown = ChevronDown;
  readonly ChevronUp = ChevronUp;

  constructor() {
    const hoy = new Date();
    this.fecha = hoy.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    this.hora = '23:59'; // 11:59 PM en formato 24h
  }


}
