import { Component } from '@angular/core';
import { LucideAngularModule, UserPlus, LogOut } from 'lucide-angular';

@Component({
  selector: 'component-groups-details-dropdown',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './dropdown.component.html',
})
export class ComponentGroupsDetailsDropdown {

  readonly UserPlus = UserPlus;
  readonly LogOut = LogOut;

}
