import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from '../cartProduct.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Input() cartProduct: CartProduct;
  @Input() productId: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {

  }

  onDelete(){
    this.shoppingListService.deleteProduct(this.productId)
  }

  onDecrease(){
    if(this.cartProduct.quantity <= 1){
      this.onDelete();
    }
    this.shoppingListService.setLocalProductPrice(this.productId, this.cartProduct.quantity-1);
  }

  onIncrease(){
    this.shoppingListService.setLocalProductPrice(this.productId, this.cartProduct.quantity+1);
  }



}
