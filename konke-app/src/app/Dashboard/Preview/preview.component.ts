import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'preview-component',
  templateUrl: './preview.component.html',
  imports: [RouterLink, CommonModule],
})
export class PreviewComponent {
  show: boolean = false;
  loggedIn: boolean = false;

  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }
}
