import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'marketing-component',
  templateUrl: './marketing.component.html',
  imports: [RouterLink],
})
export class MarketingComponent {}
