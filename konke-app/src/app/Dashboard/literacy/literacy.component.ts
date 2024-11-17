import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-financial-literacy',
  templateUrl: './literacy.component.html',
  styleUrls: ['./literacy.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),  // Initial opacity of 0
        animate(500)            // Animate to full opacity over 500ms
      ])
    ])
  ]
})
export class FinancialLiteracyComponent {
  showContent: boolean = false;

  // Simulate content loading after 1 second
  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;  // Show content after delay
    }, 1000);
  }
}
