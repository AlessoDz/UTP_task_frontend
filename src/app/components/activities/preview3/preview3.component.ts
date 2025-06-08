import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, LaptopMinimal, BriefcaseBusiness, X, MapPin, Video } from 'lucide-angular';

@Component({
  selector: 'component-activities-preview3',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './preview3.component.html',
})
export class ComponentActivitiesPreview3 {

  readonly LaptopMinimal = LaptopMinimal;
  readonly BriefcaseBusiness = BriefcaseBusiness
  readonly X = X;
  readonly MapPin = MapPin;
  readonly Video = Video;

}