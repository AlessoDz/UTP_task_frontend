import { Component } from '@angular/core';
import { LucideAngularModule, Calendar, Flame, Sparkles, ListChecks, ListTodo } from 'lucide-angular';

@Component({
  selector: 'component-dashboard-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentDashboardStats {

  readonly Calendar = Calendar;
  readonly Flame = Flame;
  readonly Sparkles = Sparkles;
  readonly ListChecks = ListChecks;
  readonly ListTodo = ListTodo;

}
