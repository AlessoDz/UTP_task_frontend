import { Component } from '@angular/core';
import { ComponentGroupsDetails } from '@components/groups/details/details.component';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';
import { LucideAngularModule, ArrowLeft } from 'lucide-angular';

@Component({
  selector: 'page-groups-details',
  imports: [
    LucideAngularModule,
    ComponentSharedToast,
    ComponentGroupsDetails,
  ],
  templateUrl: './details-page.component.html',
})
export class PageGroupsDetails {

  readonly ArrowLeft = ArrowLeft;

}
