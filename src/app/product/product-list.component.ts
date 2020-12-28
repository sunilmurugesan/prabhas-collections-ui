import {Component, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pc-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  errorMessage: '';

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('category');
    console.log(param);
    if (param) {
      const category = param;
      this.productService.getProducts(category).subscribe({
        next: products => this.products = products,
        error: err => this.errorMessage = err
      });
    }

  }
}
