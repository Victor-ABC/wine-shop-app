import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { CurrentEventsComponent } from './current-events/current-events.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'events', component: CurrentEventsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', loadComponent: () => import('./checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'product/:id', loadComponent: () => import('./product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
];
