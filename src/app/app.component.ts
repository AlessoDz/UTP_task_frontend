import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'UTP_task_frontend';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => window.HSStaticMethods.autoInit(), 100);
      }
    });
  }


}
