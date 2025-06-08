import { Component } from '@angular/core';
import { ArrowDownRight, ArrowRight, ArrowUpRight, LucideAngularModule, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'component-progress-overview-points',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './points.component.html',
})
export class ComponentProgressOverviewPoints {

  readonly TrendingUp = TrendingUp;
  readonly ArrowUpRight = ArrowUpRight;
  readonly ArrowDownRight = ArrowDownRight;
  readonly ArrowRight = ArrowRight;

}
