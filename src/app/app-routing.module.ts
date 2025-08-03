import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' }, // Redirect root to /shop
  { path: '**', redirectTo: '/shop' } // Redirect unknown paths to /shop
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
