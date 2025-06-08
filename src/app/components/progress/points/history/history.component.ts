import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'component-progress-points-history',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './history.component.html',
})
export class ComponentProgressPointsHistory {

  readonly ChevronDown = ChevronDown;

  contributions: any[][] = [];

  ngOnInit(): void {
    this.generateRandomContributions();
  }

  generateRandomContributions() {
    const weeks = 53;
    const daysPerWeek = 7;

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (weeks * daysPerWeek));

    for (let w = 0; w < weeks; w++) {
      const week: any[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + w * 7 + d);
        const count = Math.floor(Math.random() * 10); // 0 a 9 actividades
        week.push({ date, count });
      }
      this.contributions.push(week);
    }
  }

  getColor(count: number): string {
    if (count === 0) return 'bg-gray-100';
    if (count < 3) return 'bg-green-900';
    if (count < 5) return 'bg-green-700';
    if (count < 7) return 'bg-green-500';
    return 'bg-green-300';
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

}
