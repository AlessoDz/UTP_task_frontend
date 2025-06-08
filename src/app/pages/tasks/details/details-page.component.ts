import { Component } from '@angular/core';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';
import { ComponentTasksDetails } from '@components/tasks/details/details.component';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'page-tasks-details',
  imports: [
    LucideAngularModule,
    ComponentTasksDetails,
    ComponentSharedToast
  ],
  templateUrl: './details-page.component.html',
})
export class PageTasksDetails {

  readonly ArrowLeft = ArrowLeft;

}
