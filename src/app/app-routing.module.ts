import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductCategoryComponent} from './product/product-category/product-category.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';


const routes: Routes = [
  {path: 'home', component: ProductCategoryComponent},
  {path: 'products/:category', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
