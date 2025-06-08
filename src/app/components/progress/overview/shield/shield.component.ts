import { Component } from '@angular/core';
import { Info, LucideAngularModule, Shield, Flame, CircleAlert } from 'lucide-angular';

@Component({
  selector: 'component-progress-overview-shield',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './shield.component.html',
})
export class ComponentProgressOverviewShield {

  readonly Shield = Shield;
  readonly Info = Info;
  readonly Flame = Flame;
  readonly CircleAlert = CircleAlert;

}
