import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FileText, Flame, Calendar, Clock, MessageSquareMoreIcon, LucideAngularModule, Laptop, RotateCcw } from 'lucide-angular';

@Component({
  selector: 'component-notifications-table',
  imports: [
    RouterLink, CommonModule,
    LucideAngularModule,
  ],
  templateUrl: './table.component.html',
})
export class ComponentNotificationsTable {

  readonly FileText = FileText;
  readonly Flame = Flame;
  readonly Calendar = Calendar;
  readonly Clock = Clock;
  readonly MessageSquareMoreIcon = MessageSquareMoreIcon;
  readonly Laptop = Laptop;
  readonly RotateCcw = RotateCcw;

  notifications = [
    {
      title: 'Entrega próxima',
      description: '¡Recuerda! Tienes que entregar tu informe de laboratorio en 1 hora.',
      date: 'Hace 58m',
      type: 'Task',
      read: false,
      href: '/dashboard/tareas/TASK-031858100525'
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
      href: '/dashboard/tareas/TASK-031858100525'
    },
    {
      title: '¡Última llamada!',
      description: 'Tu tarea de Física vence en 2 horas.',
      date: 'Hace 2d',
      type: 'Call',
      read: true,
      href: '/dashboard/tareas/TASK-031858100525'
    },
    {
      title: 'Reunión programada',
      description: 'Tienes una reunión con el equipo de proyecto a las 3:00 PM.',
      date: 'Hace 30m',
      type: 'Meeting',
      read: false,
      href: '/dashboard/reuniones/MEETING-12345'
    },
    {
      title: 'Entrega completada',
      description: 'Tu informe de laboratorio ha sido entregado exitosamente.',
      date: 'Hace 1h',
      type: 'Task',
      read: true,
      href: '/dashboard/tareas/TASK-67890'
    },
    {
      title: 'Nuevo mensaje',
      description: 'Has recibido un nuevo mensaje de tu profesor de Matemáticas.',
      date: 'Hace 3h',
      type: 'Message',
      read: false,
      href: '/dashboard/mensajes/MESSAGE-54321'
    },
    {
      title: 'Actualización de curso',
      description: 'El contenido del curso de Física ha sido actualizado.',
      date: 'Hace 5h',
      type: 'Update',
      read: false,
      href: '/dashboard/cursos/FISICA-101'
    },
    {
      title: 'Recordatorio de examen',
      description: 'Tu examen de Química es mañana a las 9:00 AM.',
      date: 'Hace 8h',
      type: 'Call',
      read: false,
      href: '/dashboard/examenes/EXAM-98765'
    },
    {
      title: 'Nueva tarea asignada',
      description: 'Se te ha asignado una nueva tarea en el curso de Historia.',
      date: 'Hace 1d',
      type: 'Task',
      read: false,
      href: '/dashboard/tareas/TASK-112233'
    },
    {
      title: 'Evento próximo',
      description: 'No olvides asistir al seminario de Inteligencia Artificial.',
      date: 'Hace 2d',
      type: 'Activity',
      read: true,
      href: '/dashboard/eventos/EVENT-445566'
    },
    {
      title: 'Calificación publicada',
      description: 'Tu calificación del examen de Matemáticas ya está disponible.',
      date: 'Hace 3d',
      type: 'Task',
      read: true,
      href: '/dashboard/calificaciones/MATH-EXAM'
    },
    {
      title: 'Actualización de perfil',
      description: 'Tu perfil ha sido actualizado correctamente.',
      date: 'Hace 4d',
      type: 'Update',
      read: true,
      href: '/dashboard/perfil'
    },
    {
      title: 'Nuevo recurso disponible',
      description: 'Se ha agregado un nuevo recurso al curso de Programación.',
      date: 'Hace 5d',
      type: 'Task',
      read: false,
      href: '/dashboard/recursos/PROGRAMACION-101'
    }
  ]

  visibleCount = 10;

  get visibleNotifications() {
    return this.notifications.slice(0, this.visibleCount);
  }

  cargarMas() {
    this.visibleCount += 5;
  }

  marcarTodoComoLeido() {
    this.notifications = this.notifications.map(n => ({ ...n, read: true }));
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

}
