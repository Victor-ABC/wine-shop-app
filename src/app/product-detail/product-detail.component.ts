import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WINES, Wine } from '../data/wines';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  wine?: Wine;
  quantity: number = 0;
  successMessage: string | null = null;

  constructor(private route: ActivatedRoute, private cart: CartService, private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.wine = WINES.find(w => w.id === id);
    if (!this.wine) {
      this.router.navigate(['/shop']);
    }
  }

  addToCart() {
    if (this.wine && this.quantity > 0) {
      this.cart.addToCart(this.wine, this.quantity);
      this.successMessage = `${this.quantity}x '${this.wine.name}' zum Warenkorb hinzugefügt!`;
      this.quantity = 0;
      setTimeout(() => {
        this.successMessage = null;
      }, 2000);
    }
  }

  goToShop() {
    this.router.navigate(['/shop']);
  }
}
