import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArrowLeft, Calendar, ClipboardList, Home, LucideAngularModule, Medal, MessageCircle, Users } from 'lucide-angular';

@Component({
  selector: 'component-shared-sidebar',
  imports: [
    RouterModule, CommonModule,
    LucideAngularModule
  ],
  templateUrl: './sidebar.component.html',
})
export class ComponentSharedSidebar {

  readonly Home = Home;
  readonly Calendar = Calendar;
  readonly MessageCircle = MessageCircle;
  readonly ClipboardList = ClipboardList;
  readonly ArrowLeft = ArrowLeft;
  readonly Users = Users
  readonly Medal = Medal;

  links = [
    { href: "agenda", text: "Agenda", icon: Calendar },
    { href: "tareas", text: "Tareas", icon: ClipboardList },
    { href: "grupos", text: "Grupos", icon: Users },
    { href: "progreso", text: "Progreso", icon: Medal },
  ];

}
