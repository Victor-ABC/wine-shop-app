import { Component } from '@angular/core';
import { WINE_CATEGORIES, WINES, Wine } from '../data/wines';
import { FuzzySearchService } from '../services/fuzzy-search.service';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  categories = WINE_CATEGORIES;
  wines = WINES;
  filteredWines = WINES;
  selectedCategory = '';
  searchQuery = '';
  quantities: { [id: number]: number } = {};
  successMessage: string | null = null;

  constructor(
    private fuzzy: FuzzySearchService,
    private cart: CartService
  ) {
    // Set default quantity to 0 for all wines
    for (const wine of WINES) {
      this.quantities[wine.id] = 0;
    }
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearch(query: string) {
    this.searchQuery = query;
    this.applyFilters();
  }

  applyFilters() {
    let wines = WINES;
    if (this.selectedCategory) {
      wines = wines.filter(w => w.category === this.selectedCategory);
    }
    this.filteredWines = this.fuzzy.search(wines, this.searchQuery);
  }

  addToCart(wine: Wine) {
    const qty = this.quantities[wine.id] || 0;
    if (qty > 0) {
      this.cart.addToCart(wine, qty);
      this.quantities[wine.id] = 0;
      this.successMessage = `${qty}x '${wine.name}' zum Warenkorb hinzugefügt!`;
      setTimeout(() => {
        this.successMessage = null;
      }, 2000);
    }
  }
}
