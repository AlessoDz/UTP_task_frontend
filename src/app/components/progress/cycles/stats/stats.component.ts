import { Component } from '@angular/core';
import { LucideAngularModule, Award, ArrowUpRight } from 'lucide-angular';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'component-progress-cycles-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentProgressCyclesStats {

  readonly Award = Award;
  readonly ArrowUpRight = ArrowUpRight;

}
