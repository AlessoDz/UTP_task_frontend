import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, LaptopMinimal, BriefcaseBusiness, X } from 'lucide-angular';

@Component({
  selector: 'component-activities-preview2',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './preview2.component.html',
})
export class ComponentActivitiesPreview2 {

  readonly LaptopMinimal = LaptopMinimal;
  readonly BriefcaseBusiness = BriefcaseBusiness
  readonly X = X;

}