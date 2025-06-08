import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentActivitiesPreview1 } from '@components/activities/preview1/preview1.component';
import { ComponentActivitiesPreview2 } from '@components/activities/preview2/preview2.component';
import { ComponentActivitiesPreview3 } from '@components/activities/preview3/preview3.component';
import { ComponentTasksPreview1 } from '@components/tasks/preview/preview1/preview1.component';
import { ComponentTasksPreview2 } from '@components/tasks/preview/preview2/preview2.component';
import { LucideAngularModule, ClipboardList, AlarmClock, PaperclipIcon, MessageSquareMore, Bell, SquareCheck, Clock, Video, BriefcaseBusiness, MapPin, ArrowRight, LaptopMinimal } from 'lucide-angular';

@Component({
  selector: 'component-dashboard-agenda-today',
  imports: [
    LucideAngularModule,
    CommonModule,
    ComponentActivitiesPreview1, ComponentActivitiesPreview2, ComponentActivitiesPreview3,
    ComponentTasksPreview1, ComponentTasksPreview2
  ],
  templateUrl: './agenda-today.component.html',
})
export class ComponentDashboardAgendaToday {

  readonly ClipboardList = ClipboardList;
  readonly AlarmClock = AlarmClock;
  readonly PaperclipIcon = PaperclipIcon;
  readonly MessageSquareMore = MessageSquareMore;
  readonly Bell = Bell;
  readonly SquarCheck = SquareCheck;
  readonly Clock = Clock;
  readonly BriefcaseBusiness = BriefcaseBusiness;
  readonly MapPin = MapPin;
  readonly ArrowRight = ArrowRight;
  readonly Video = Video;
  readonly LaptopMinimal = LaptopMinimal;

}
