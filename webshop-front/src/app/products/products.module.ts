import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductItemComponent } from "./product-list/product-item/product-item.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";

@NgModule({
    declarations: [
        ProductsComponent,
        ProductListComponent,
        ProductItemComponent,
        ProductDetailComponent
    ],
    imports: [CommonModule, NgxPaginationModule, ProductsRoutingModule],
    exports: [
        ProductsComponent,
        ProductListComponent,
        ProductItemComponent,
        ProductDetailComponent
    ]
})
export class ProductsModule {}