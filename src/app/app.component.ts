import { Component } from '@angular/core';
import {Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e2d';
}
