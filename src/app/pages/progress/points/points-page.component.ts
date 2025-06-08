import { Component } from '@angular/core';
import { ComponentProgressPointsHistory } from '@components/progress/points/history/history.component';
import { ComponentProgressPointsStats } from '@components/progress/points/stats/stats.component';
import { LucideAngularModule, ArrowRight, ArrowLeft } from 'lucide-angular';
import { ComponentProgressPointsActivities } from "../../../components/progress/points/activities/activities.component";

@Component({
  selector: 'page-progress-points',
  imports: [
    LucideAngularModule,
    ComponentProgressPointsStats,
    ComponentProgressPointsHistory,
    ComponentProgressPointsActivities
],
  templateUrl: './points-page.component.html',
})
export class PageProgressPoints {

  readonly ArrowLeft = ArrowLeft;

}
