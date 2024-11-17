import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'welcome-component',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  imports: [RouterLink],
})
export class WelcomeComponent {}
