import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PreviewComponent } from './Dashboard/Preview/preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet],
})
export class AppComponent {
  appName = 'konke-app';
}
