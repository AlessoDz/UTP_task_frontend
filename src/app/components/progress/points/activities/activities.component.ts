import { Component } from '@angular/core';
import { LucideAngularModule, AlarmClock, SquareCheck, Clock } from 'lucide-angular';

@Component({
  selector: 'component-progress-points-activities',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './activities.component.html',
})
export class ComponentProgressPointsActivities {

  readonly AlarmClock = AlarmClock;
  readonly SquareCheck = SquareCheck;
  readonly Clock = Clock;

}
