import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DashboardComponent } from "./app/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-dashboard></app-dashboard>`,
  imports: [DashboardComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
