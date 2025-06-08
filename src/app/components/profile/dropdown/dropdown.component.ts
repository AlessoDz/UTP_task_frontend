import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { CircleUserRound, LogOut, LucideAngularModule, SquareUser, User } from 'lucide-angular';

@Component({
  selector: 'component-profile-dropdown',
  imports: [
    RouterLink,
    LucideAngularModule
  ],
  templateUrl: './dropdown.component.html',
})
export class ComponentProfileDropdown {

  readonly CircleUserRound = CircleUserRound;
  readonly User = User;
  readonly Logout = LogOut;

}
