import { Component } from '@angular/core';
import { LucideAngularModule, MessageSquareMore, Check } from 'lucide-angular';

@Component({
  selector: 'component-groups-table',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './table.component.html',
})
export class ComponentGroupsTable {

  readonly MessageSquareMore = MessageSquareMore;
  readonly Check = Check;

}
