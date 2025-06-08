import { Component } from '@angular/core';
import { ComponentNotificationsTable } from '@components/notifications/table/table.component';

@Component({
  selector: 'page-notifications-overview',
  imports: [
    ComponentNotificationsTable
  ],
  templateUrl: './overview-page.component.html',
})
export class PageNotificationsOverview {

}
