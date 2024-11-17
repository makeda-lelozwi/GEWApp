import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-system',
  imports: [NgIf, FormsModule],
  standalone: true,
  template: `
    <div style="max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <h2 style="text-align: center; margin-bottom: 20px;">Payment System</h2>

      <!-- Payment Options -->
      <div style="margin-bottom: 20px;">
        <label style="font-weight: bold; margin-bottom: 10px; display: block;">Select Payment Method</label>
        <select [(ngModel)]="paymentMethod" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          <option value="ussd">USSD Payment</option>
          <option value="phone">Phone Number Payment</option>
          <option value="card">Card Payment</option>
        </select>
      </div>

      <!-- USSD Payment Form -->
      <div *ngIf="paymentMethod === 'ussd'" style="margin-bottom: 20px;">
        <h3 style="margin-bottom: 15px;">USSD Payment</h3>
        <form>
          <label for="ussdCode" style="display: block; font-weight: bold; margin-bottom: 5px;">Enter USSD Code</label>
          <input 
            type="text" 
            id="ussdCode" 
            name="ussdCode" 
            placeholder="*123*456#"
            [(ngModel)]="ussdCode"
            style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
        </form>
      </div>

      <!-- Phone Number Payment Form -->
      <div *ngIf="paymentMethod === 'phone'" style="margin-bottom: 20px;">
        <h3 style="margin-bottom: 15px;">Phone Number Payment</h3>
        <form>
          <label for="phoneNumber" style="display: block; font-weight: bold; margin-bottom: 5px;">Enter Phone Number</label>
          <input 
            type="tel" 
            id="phoneNumber" 
            name="phoneNumber" 
            placeholder="123-456-7890"
            [(ngModel)]="phoneNumber"
            style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
        </form>
      </div>

      <!-- Card Payment Form -->
      <div *ngIf="paymentMethod === 'card'" style="margin-bottom: 20px;">
        <h3 style="margin-bottom: 15px;">Card Payment</h3>
        <form>
          <label for="cardName" style="display: block; font-weight: bold; margin-bottom: 5px;">Cardholder Name</label>
          <input 
            type="text" 
            id="cardName" 
            name="cardName" 
            placeholder="Enter cardholder name"
            [(ngModel)]="cardName"
            style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 10px;">

          <label for="cardNumber" style="display: block; font-weight: bold; margin-bottom: 5px;">Card Number</label>
          <input 
            type="text" 
            id="cardNumber" 
            name="cardNumber" 
            placeholder="1234 5678 9012 3456"
            [(ngModel)]="cardNumber"
            style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 10px;">

          <label for="expiryDate" style="display: block; font-weight: bold; margin-bottom: 5px;">Expiry Date</label>
          <input 
            type="text" 
            id="expiryDate" 
            name="expiryDate" 
            placeholder="MM/YY"
            [(ngModel)]="expiryDate"
            style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 10px;">

          <label for="cvv" style="display: block; font-weight: bold; margin-bottom: 5px;">CVV</label>
          <input 
            type="password" 
            id="cvv" 
            name="cvv" 
            placeholder="123"
            [(ngModel)]="cvv"
            style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
        </form>
      </div>

      <!-- Next Button -->
      <button 
        type="button" 
        (click)="handleNext()" 
        style="width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">
        Next
      </button>
    </div>
  `,
})
export class PaymentComponent {
  // Default payment method
  paymentMethod: string = 'ussd';

  // Form fields
  ussdCode: string = '';
  phoneNumber: string = '';
  cardName: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  handleNext() {
    switch (this.paymentMethod) {
      case 'ussd':
        console.log('Proceeding with USSD Payment:', this.ussdCode);
        break;
      case 'phone':
        console.log('Proceeding with Phone Payment:', this.phoneNumber);
        break;
      case 'card':
        console.log('Proceeding with Card Payment:', {
          cardName: this.cardName,
          cardNumber: this.cardNumber,
          expiryDate: this.expiryDate,
          cvv: this.cvv,
        });
        break;
      default:
        console.error('Unknown payment method');
    }
  }
}
