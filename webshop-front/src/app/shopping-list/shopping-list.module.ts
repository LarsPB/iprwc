import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShoppingItemComponent } from "./shopping-item/shopping-item.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListComponent } from "./shopping-list.component";



@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingItemComponent
    ],
    imports: [CommonModule, ShoppingListRoutingModule],
    exports: [
        ShoppingListComponent,
        ShoppingItemComponent
    ]
})

export class ShoppingListModule {}