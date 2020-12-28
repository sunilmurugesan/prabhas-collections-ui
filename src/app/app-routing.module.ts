import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductCategoryComponent} from './product/product-category.component';
import {ProductListComponent} from './product/product-list.component';


const routes: Routes = [
  {path: 'home', component: ProductCategoryComponent},
  {path: 'products/:category', component: ProductListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
