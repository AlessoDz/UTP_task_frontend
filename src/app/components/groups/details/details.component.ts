import { Component } from '@angular/core';
import { User, Calendar1, Check, LucideAngularModule, UserPlus, LogOut, EllipsisVertical, ChevronDown } from 'lucide-angular';
import { ComponentGroupsDetailsTasks } from './tasks/tasks.component';
import { ComponentGroupsDetailsDropdown } from './dropdown/dropdown.component';
import { ComponentGroupsDetailsComments } from './comments/comments.component';
import { ComponentGroupsDetailsFiles } from './files/files.component';
import { ComponentGroupsDetailsMembers } from './members/members.component';
import { CommonModule } from '@angular/common';
import { ComponentGroupsAlertsLogout } from '../alerts/logout/logout.component';
import { ComponentGroupsAlertsDelete } from '../alerts/delete/delete.component';

@Component({
  selector: 'component-groups-details',
  imports: [
    LucideAngularModule, CommonModule,
    ComponentGroupsDetailsTasks, ComponentGroupsDetailsComments, ComponentGroupsDetailsFiles, ComponentGroupsDetailsMembers,
    ComponentGroupsDetailsDropdown, ComponentGroupsAlertsLogout, ComponentGroupsAlertsDelete
  ],
  templateUrl: './details.component.html',
})
export class ComponentGroupsDetails {

  selectedSection: 'tasks' | 'comments' | 'files' | 'members' = 'tasks';

  selectSection(section: 'tasks' | 'comments' | 'files' | 'members') {
    this.selectedSection = section;
  }

  readonly User = User;
  readonly Calendar1 = Calendar1;
  readonly Check = Check;
  readonly UserPlus = UserPlus;
  readonly LogOut = LogOut;
  readonly ElipsisVertical = EllipsisVertical;
  readonly ChevronDown = ChevronDown;

}
