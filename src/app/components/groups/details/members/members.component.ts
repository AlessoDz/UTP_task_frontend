import { Component } from '@angular/core';
import { ComponentSharedAddMembers } from '@components/shared/add-members/add-members.component';
import { LucideAngularModule, UserPlus } from 'lucide-angular';

@Component({
  selector: 'component-groups-details-members',
  imports: [
    LucideAngularModule,
    ComponentSharedAddMembers
  ],
  templateUrl: './members.component.html',
})
export class ComponentGroupsDetailsMembers {

  readonly UserPlus = UserPlus;

}
