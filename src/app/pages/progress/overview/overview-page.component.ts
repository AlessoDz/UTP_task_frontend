import { Component } from '@angular/core';
import { ComponentProgressOverviewMedal } from '@components/progress/overview/medal/medal.component';
import { ComponentProgressOverviewPoints } from '@components/progress/overview/points/points.component';
import { ComponentProgressOverviewShield } from '@components/progress/overview/shield/shield.component';
import { ComponentProgressOverviewStats } from '@components/progress/overview/stats/stats.component';
import { ComponentProgressOverviewStreak } from '@components/progress/overview/streak/streak.component';

@Component({
  selector: 'page-progress-overview',
  imports: [
    ComponentProgressOverviewStats,
    ComponentProgressOverviewStreak,
    ComponentProgressOverviewPoints,
    ComponentProgressOverviewMedal,
    ComponentProgressOverviewShield,
],
  templateUrl: './overview-page.component.html',
})
export class PageProgressOverview {


}
