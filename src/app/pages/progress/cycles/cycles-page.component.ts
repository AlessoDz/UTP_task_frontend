import { Component } from '@angular/core';
import { ComponentProgressCyclesStats } from '@components/progress/cycles/stats/stats.component';
import { LucideAngularModule, ArrowLeft } from 'lucide-angular';

@Component({
  selector: 'page-progress-cycles',
  imports: [
    LucideAngularModule,
    ComponentProgressCyclesStats
  ],
  templateUrl: './cycles-page.component.html',
})
export class PageProgressCycles {

  readonly ArrowLeft = ArrowLeft;

}
