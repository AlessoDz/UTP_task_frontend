import { Component } from '@angular/core';
import { ArrowRight, Bell, Check, LucideAngularModule, MessageSquareMore } from 'lucide-angular';

@Component({
  selector: 'component-dashboard-groups',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './groups.component.html',
})
export class ComponentDashboardGroups {

  readonly Bell = Bell;
  readonly MessageSquareMore = MessageSquareMore;
  readonly Check = Check;
  readonly ArrowRight = ArrowRight;

}
