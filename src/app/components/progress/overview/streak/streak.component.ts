import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Flame, Calendar1, Shield } from 'lucide-angular';

@Component({
  selector: 'component-progress-overview-streak',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './streak.component.html',
})
export class ComponentProgressOverviewStreak {

  readonly Flame = Flame;
  readonly Calendar1 = Calendar1;
  readonly Shield = Shield;

  totalDias = 17;
  diasMarcados = 16;

  get dias(): boolean[] {
    return Array.from({ length: this.totalDias }, (_, i) => i < this.diasMarcados);
  }

}
