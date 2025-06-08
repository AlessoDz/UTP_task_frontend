import { Component } from '@angular/core';
import { LucideAngularModule, ClipboardList, AlarmClock, PaperclipIcon, MessageSquareMore, Bell, SquareCheck, Clock, Video, BriefcaseBusiness, MapPin, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'component-groups-details-tasks',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './tasks.component.html',
})
export class ComponentGroupsDetailsTasks {

  readonly ClipboardList = ClipboardList;
  readonly AlarmClock = AlarmClock;
  readonly PaperclipIcon = PaperclipIcon;
  readonly MessageSquareMore = MessageSquareMore;
  readonly Bell = Bell;
  readonly SquarCheck = SquareCheck;
  readonly Clock = Clock;
  readonly Video = Video;
  readonly BriefcaseBusiness = BriefcaseBusiness;
  readonly MapPin = MapPin;
  readonly ArrowRight = ArrowRight;

}
