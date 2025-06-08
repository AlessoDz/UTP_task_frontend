import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, LaptopMinimal, BriefcaseBusiness, X, Clock, PaperclipIcon, Bell, MessageSquareMore, Users, SquareCheck } from 'lucide-angular';

@Component({
  selector: 'component-tasks-preview1',
  imports: [
    LucideAngularModule,
  ],
  templateUrl: './preview1.component.html',
})
export class ComponentTasksPreview1 {

  readonly LaptopMinimal = LaptopMinimal;
  readonly BriefcaseBusiness = BriefcaseBusiness
  readonly X = X;
  readonly Clock = Clock;
  readonly PaperclipIcon = PaperclipIcon;
  readonly Bell = Bell;
  readonly MessageSquareMore = MessageSquareMore;
  readonly Users = Users;
  readonly SquareCheck = SquareCheck;

}