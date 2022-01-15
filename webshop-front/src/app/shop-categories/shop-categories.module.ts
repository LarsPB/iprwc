import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from "../app-routing.module";
import { MainpageShopComponent } from "./mainpage-shop/mainpage-shop.component";
import { ShopCategoriesRoutingModule } from "./shop-categories-routing.module";
import { ShopCategoriesComponent } from "./shop-categories.component";

@NgModule({
    declarations: [
        MainpageShopComponent,
        ShopCategoriesComponent
    ],
    imports: [AppRoutingModule, CommonModule, ReactiveFormsModule, NgxPaginationModule, ShopCategoriesRoutingModule],
    exports: [
        MainpageShopComponent,
        ShopCategoriesComponent
    ]
})

export class ShopCategoriesModule {}