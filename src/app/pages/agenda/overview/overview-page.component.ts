import { Component } from '@angular/core';
import { ComponentAgendaCalendar } from '@components/agenda/calendar/calendar.component';
import { ComponentAgendaDayTable } from '@components/agenda/day/table/table.component';
import { ArrowLeft, ArrowRight, Calendar1, EllipsisVertical, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'page-agenda-overview',
  imports: [
    LucideAngularModule,
    ComponentAgendaDayTable,
    ComponentAgendaCalendar
],
  templateUrl: './overview-page.component.html',
})
export class PageAgendaOverview {

  readonly Calendar1 = Calendar1;
  readonly EllipsisVertical = EllipsisVertical;
  readonly ArrowLeft = ArrowLeft;
  readonly ArrowRight = ArrowRight;

}
