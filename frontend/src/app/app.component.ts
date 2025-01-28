import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { PrimeNgModule } from './features/primeng.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimeNgModule, DashboardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'track-it';
}
