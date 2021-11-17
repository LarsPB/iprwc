import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  setBackgroundColor: boolean = false;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onBack() {
    this.productService.productSelected.next();
  }

}
