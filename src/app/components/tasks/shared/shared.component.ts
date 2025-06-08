import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Copy, LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'component-tasks-shared',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './shared.component.html',
})
export class ComponentTasksShared {

  readonly X = X;
  readonly Copy = Copy;

}