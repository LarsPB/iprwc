import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService, 
    private shoppingListService: ShoppingListService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.productService.productSelected.next(this.product);
  }

  async onAddToCart(){
    this.shoppingListService.addProduct(this.product);
    await this.delay(.25);
    this.router.navigate(['../shopping-cart'], {relativeTo: this.route});
  }

  delay(n:number){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }





}
