import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-shared-toast',
  imports: [
    // RouterLink
  ],
  templateUrl: './toast.component.html',
})
export class ComponentSharedToast {

  @Input()
  detailsTask: boolean = false;


  @Input()
  detailsGroup: boolean = false;

}

