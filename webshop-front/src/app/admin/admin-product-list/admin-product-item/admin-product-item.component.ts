import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/products/product.model';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.css']
})
export class AdminProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() productId: number;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onRemoveProduct(){
    this.productService.deleteProduct(this.productId);
  }

  onEdit(){
    this.router.navigate(['../admin/edit-product', this.productId ]);
  }
}
