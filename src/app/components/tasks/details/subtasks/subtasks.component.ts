import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Plus, Check, Trash } from 'lucide-angular';

@Component({
  selector: 'component-tasks-details-subtasks',
  imports: [
    CommonModule, FormsModule,
    LucideAngularModule
  ],
  templateUrl: './subtasks.component.html',
})
export class ComponentTasksDetailsSubtasks {

  readonly Plus = Plus;
  readonly Check = Check;
  readonly Trash = Trash;

  subtasks: any[] = [
    { id: 1, text: 'Investigar competencia en el mercado', completed: false },
    { id: 2, text: 'Modelar arquitectura y tecnologías', completed: false },
    { id: 3, text: 'Crear esquema de contenido', completed: false },
    { id: 4, text: 'Diseñar sliders principales', completed: false },
    { id: 5, text: 'Preparar demo del producto', completed: false },
  ];

  newSubtaskText = '';
  private nextId = 6;

  get completedCount(): number {
    return this.subtasks.filter(t => t.completed).length;
  }

  toggleCompleted(id: number): void {
    this.subtasks = this.subtasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  removeSubtask(id: number): void {
    this.subtasks = this.subtasks.filter(task => task.id !== id);
  }

  addSubtask(): void {
    const text = this.newSubtaskText.trim();
    if (!text) return;

    this.subtasks = [
      ...this.subtasks,
      { id: this.nextId++, text, completed: false },
    ];

    this.newSubtaskText = '';
  }

}
