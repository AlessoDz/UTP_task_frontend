import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, LaptopMinimal, BriefcaseBusiness, X } from 'lucide-angular';

@Component({
  selector: 'component-activities-preview1',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './preview1.component.html',
})
export class ComponentActivitiesPreview1 {

  readonly LaptopMinimal = LaptopMinimal;
  readonly BriefcaseBusiness = BriefcaseBusiness
  readonly X = X;

}