import { Component } from '@angular/core';
import { ArrowDownRight, ArrowUpRight, LucideAngularModule, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'component-progress-points-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentProgressPointsStats {

  readonly TrendingUp = TrendingUp;
  readonly ArrowUpRight = ArrowUpRight;
  readonly ArrowDownRight = ArrowDownRight;

}
