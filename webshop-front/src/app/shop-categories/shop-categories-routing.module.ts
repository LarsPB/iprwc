import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainpageShopComponent } from "./mainpage-shop/mainpage-shop.component";
import { ShopCategoriesComponent } from "./shop-categories.component";


const routes: Routes = [
    { path: '', component:MainpageShopComponent},
    { path: 'category', component: ShopCategoriesComponent}


]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShopCategoriesRoutingModule{}