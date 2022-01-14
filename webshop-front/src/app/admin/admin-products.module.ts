import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from "../app-routing.module";
import { AdminProductEditComponent } from "./admin-product-edit/admin-product-edit.component";
import { AdminProductItemComponent } from "./admin-product-list/admin-product-item/admin-product-item.component";
import { AdminProductListComponent } from "./admin-product-list/admin-product-list.component";
import { AdminProductsRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";




@NgModule({
    declarations: [
        AdminComponent,
        AdminProductListComponent,
        AdminProductItemComponent,
        AdminProductEditComponent
    ],
    imports: [AppRoutingModule, CommonModule, ReactiveFormsModule, NgxPaginationModule, AdminProductsRoutingModule],
    exports: [
        AdminComponent,
        AdminProductListComponent,
        AdminProductItemComponent,
        AdminProductEditComponent
    ]
})

export class AdminProductsModule {}