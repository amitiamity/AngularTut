import {IProduct} from './product';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  // selector: 'pm-product-detail', //selector is required when only we need to do it nesting. we can remove
  // it if routing is been defined
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product =  {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18,2016",
         "description": "15 gallon capacity",
          "price": 32.99,
          "starRating": 4.2,
          "imageURL": "https://via.placeholder.com/350x150"
        }
  }
  
  onBack() : void {
    this.router.navigate(['/products']);
  }

}
