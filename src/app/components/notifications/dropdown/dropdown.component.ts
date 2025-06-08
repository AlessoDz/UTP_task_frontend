import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FileText, LucideAngularModule, Flame, Calendar, Clock, MessageSquareMoreIcon } from 'lucide-angular';

@Component({
  selector: 'component-notifications-dropdown',
  imports: [
    RouterLink, CommonModule,
    LucideAngularModule
  ],
  templateUrl: './dropdown.component.html',
})
export class ComponentNotificationsDropdown {

  readonly FileText = FileText;
  readonly Flame = Flame;
  readonly Calendar = Calendar;
  readonly Clock = Clock;
  readonly MessageSquareMoreIcon = MessageSquareMoreIcon;

  notifications = [
    {
      title: 'Entrega próxima',
      description: '¡Recuerda! Tienes que entregar tu informe de laboratorio en 1 hora.',
      date: 'Hace 58m',
      type: 'Task',
      read: false,
      href: '/dashboard/tarea/TASK-031858100525'
    },
    {
      title: '¡Racha completada!',
      description: '¡Felicidades! Has mantenido tu racha de 5 días completos.',
      date: 'Hace 2h',
      type: 'Progress',
      read: false,
      href: '/dashboard/racha'
    },
    {
      title: 'Clase próxima',
      description: 'No olvides que tienes una clase de Algoritmos a las 10:00 AM.',
      date: 'Hace 5h',
      type: 'Activity',
      read: false,
      href: '/dashboard/agenda'
    },
    {
      title: 'Nuevo comentario',
      description: 'Un nuevo comentario ha sido agregado a tu tarea de Redes.',
      date: 'Hace 1d',
      type: 'Comment',
      read: true,
      href: '/dashboard/tarea/TASK-031858100525'
    },
    {
      title: '¡Última llamada!',
      description: 'Tu tarea de Física vence en 2 horas.',
      date: 'Hace 2d',
      type: 'Call',
      read: true,
      href: '/dashboard/tarea/TASK-031858100525'
    }
  ]

}
