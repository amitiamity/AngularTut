import {IProduct} from './product';
import {Component, OnInit} from '@angular/core';

@Component({
  // selector: 'pm-product-detail', //selector is required when only we need to do it nesting. we can remove
  // it if routing is been defined
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product detail';
  product: IProduct;

  constructor() {}

  ngOnInit() {
  }

}
