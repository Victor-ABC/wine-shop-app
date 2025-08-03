import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  items: CartItem[] = [];

  constructor(private cart: CartService, private router: Router) {
    this.items = this.cart.getItems();
  }

  remove(id: number) {
    this.cart.removeFromCart(id);
    this.items = this.cart.getItems();
  }

  get total() {
    console.log('Berechne Gesamtsumme für Warenkorb:', this.items);
    const sum = this.items.reduce((sum, item) => {
      console.log(`  + ${item.quantity} x ${item.wine.name} (${item.wine.price} €)`);
      return sum + item.wine.price * item.quantity;
    }, 0);
    console.log('Gesamtsumme:', sum);
    return sum;
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
