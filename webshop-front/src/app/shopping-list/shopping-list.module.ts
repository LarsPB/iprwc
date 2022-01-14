import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingItemComponent } from "./shopping-item/shopping-item.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListComponent } from "./shopping-list.component";



@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingItemComponent
    ],
    imports: [AppRoutingModule, CommonModule, ReactiveFormsModule, NgxPaginationModule, ShoppingListRoutingModule],
    exports: [
        ShoppingListComponent,
        ShoppingItemComponent
    ]
})

export class ShoppingListModule {}