import { Component } from '@angular/core';
import { LucideAngularModule, Medal, ArrowRight, Award } from 'lucide-angular';

@Component({
  selector: 'component-progress-overview-medal',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './medal.component.html',
})
export class ComponentProgressOverviewMedal {

  readonly Medal = Medal;
  readonly ArrowRight = ArrowRight;
  readonly Award = Award;

}
