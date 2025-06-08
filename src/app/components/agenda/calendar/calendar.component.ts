import { registerLocaleData, CommonModule } from '@angular/common';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';
import { Component, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@Component({
  selector: 'component-agenda-calendar',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  templateUrl: './calendar.component.html',
})
export class ComponentAgendaCalendar {

  readonly ChevronRight = ChevronRight;
  readonly ChevronLeft = ChevronLeft;

  currentMonth = new Date(2025, 6); // junio 2025
  selectedDate: Date | null = new Date(2025, 4, 18); // guardamos fecha completa

  daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']; // días en español

  getDays() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();

    const startDay = firstDay.getDay();

    const daysArray = [];

    for (let i = 0; i < startDay; i++) {
      daysArray.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }

    return daysArray;
  }

  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1);
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1);
  }

  selectDate(day: number) {
    if (day !== null) {
      this.selectedDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), day);
    }
  }

  isSelected(day: number): boolean {
    if (!this.selectedDate) return false;
    return (
      day === this.selectedDate.getDate() &&
      this.currentMonth.getMonth() === this.selectedDate.getMonth() &&
      this.currentMonth.getFullYear() === this.selectedDate.getFullYear()
    );
  }

}

