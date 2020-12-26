import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductCategoryComponent} from './product/product-category/product-category.component';


const routes: Routes = [
  {path: 'home', component: ProductCategoryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
