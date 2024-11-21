import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'marketing-component',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css'],
  imports: [RouterLink],
})
export class MarketingComponent {}
