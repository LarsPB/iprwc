import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "../products/products.component";
import { ShopCategoriesComponent } from "./shop-categories.component";


const routes: Routes = [
    { path: '', component:ProductsComponent}, //Was MainpageShopComponent
    { path: 'category', component: ShopCategoriesComponent}

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShopCategoriesRoutingModule{}