import { Component } from '@angular/core';
import { LucideAngularModule, TrendingUp, Medal, Flame, Shield, Award } from 'lucide-angular';

@Component({
  selector: 'component-progress-overview-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentProgressOverviewStats {

  readonly TrendingUp = TrendingUp;
  readonly Medal = Medal;
  readonly Flame = Flame;
  readonly Shield = Shield;
  readonly Award = Award;

}
