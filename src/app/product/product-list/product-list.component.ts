import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
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
    this.route.paramMap.subscribe({
      next: param => {
        const category = param.get('category');
        this.getProducts(category);
      }
    });
  }

  getProducts(category: string): void {
    this.productService.getProducts(category).subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }
}
