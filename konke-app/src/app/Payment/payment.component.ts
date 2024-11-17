import { Component, signal, computed } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-method',
  standalone: true,
  import: [FormsModule, NgIf],
  templateUrl: './payment.component.html',
})
export class PaymentMethodComponent {
  paymentOptions = ['Credit Card', 'PayPal', 'Bank Transfer'];
  
  // Using signals for state management
  selectedPayment = signal<string>(this.paymentOptions[0]);
  paymentDetails = signal<Record<string, any>>({
    cardNumber: '',
    cardHolder: '',
    paypalEmail: '',
    bankAccount: '',
  });

  // Dynamically computed input fields
  isCreditCard = computed(() => this.selectedPayment() === 'Credit Card');
  isPayPal = computed(() => this.selectedPayment() === 'PayPal');
  isBankTransfer = computed(() => this.selectedPayment() === 'Bank Transfer');

  onSubmit() {
    console.log('Payment Details Submitted:', this.paymentDetails());
    alert('Payment details submitted successfully!');
  }
}
