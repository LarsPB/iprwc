import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainpageShopComponent } from "./mainpage-shop/mainpage-shop.component";
import { ShopCategoriesRoutingModule } from "./shop-categories-routing.module";
import { ShopCategoriesComponent } from "./shop-categories.component";

@NgModule({
    declarations: [
        MainpageShopComponent,
        ShopCategoriesComponent
    ],
    imports: [CommonModule, ShopCategoriesRoutingModule],
    exports: [
        MainpageShopComponent,
        ShopCategoriesComponent
    ]
})

export class ShopCategoriesModule {}