import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  step = 1;
  name = '';
  email = '';
  address = '';
  delivery: string = '';
  payment: string = '';
  orderSent = false;
  items: CartItem[] = [];

  constructor(private cart: CartService) {
    this.items = this.cart.getItems();
  }

  // Step navigation
  nextStep() { if (this.step < 4) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }
  goToStep(n: number) { this.step = n; }

  // Warenkorb
  remove(id: number) { this.cart.removeFromCart(id); this.items = this.cart.getItems(); }
  updateQuantity(item: CartItem, qty: number) {
    if (qty < 1) return;
    item.quantity = qty;
    this.cart.removeFromCart(item.wine.id);
    this.cart.addToCart(item.wine, qty);
    this.items = this.cart.getItems();
  }
  clearCart() { this.cart.clearCart(); this.items = []; }
  get total() { return this.items.reduce((sum, item) => sum + item.wine.price * item.quantity, 0); }
  getBottleCount() { return this.items.reduce((sum, item) => sum + item.quantity, 0); }
  getMwst() { return this.total * 0.19; }
  getTotalWithShipping() { let total = this.total; if (this.delivery === 'dhl') total += 7.5; return total; }

  // Validierung
  canContinueFromCart() { return this.items.length > 0; }
  canContinueFromAddress() { return this.name && this.email && this.address && this.delivery && this.payment; }

  // Bestellung abschicken
  submitOrder() {
    this.orderSent = true;
    this.clearCart();
    this.nextStep();
  }
}
