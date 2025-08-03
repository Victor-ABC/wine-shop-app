import { Injectable } from '@angular/core';
import { Wine } from '../data/wines';

@Injectable({ providedIn: 'root' })
export class FuzzySearchService {
  search(wines: Wine[], query: string): Wine[] {
    if (!query) return wines;
    const q = query.toLowerCase();
    return wines.filter(wine =>
      wine.name.toLowerCase().includes(q) ||
      wine.category.toLowerCase().includes(q) ||
      wine.description.toLowerCase().includes(q)
    );
  }
}
