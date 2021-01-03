import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pc-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProductDetailComponent implements OnInit {

  @ViewChild('productCarousel', {static : true}) carousel: NgbCarousel;

  images: any[];

  constructor(private config: NgbCarouselConfig) {

    config.animation = true;
    config.showNavigationIndicators = true;
    config.interval = 0;


    this.images = [
      'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
      'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg'
    ];

  }

  ngOnInit(): void {
  }

  goToSlide(slide: string): void {
    console.log(`Calling : ${slide}`);
    this.carousel.select(slide);
  }

}
