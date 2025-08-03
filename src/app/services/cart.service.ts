import { Injectable } from '@angular/core';
import { Wine } from '../data/wines';

export interface CartItem {
  wine: Wine;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private storageKey = 'wine-shop-cart';
  private items: CartItem[] = [];

  constructor() {
    this.load();
  }

  private save() {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    }
  }

  private load() {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(this.storageKey);
      this.items = data ? JSON.parse(data) : [];
    } else {
      this.items = [];
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  addToCart(wine: Wine, quantity: number = 1) {
    const idx = this.items.findIndex(item => item.wine.id === wine.id);
    if (idx > -1) {
      this.items[idx].quantity += quantity;
    } else {
      this.items.push({ wine, quantity });
    }
    this.save();
  }

  removeFromCart(wineId: number) {
    this.items = this.items.filter(item => item.wine.id !== wineId);
    this.save();
  }

  clearCart() {
    this.items = [];
    this.save();
  }
}
