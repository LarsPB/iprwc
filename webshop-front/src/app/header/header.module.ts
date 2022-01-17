import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { HeaderComponent } from "./header.component";
import { NavItemsComponent } from "./nav-items/nav-items.component";
import { NavSearchbarComponent } from "./nav-items/nav-searchbar/nav-searchbar.component";
import { NavShopComponent } from "./nav-shop/nav-shop.component";

@NgModule({
    declarations: [
        HeaderComponent,
        NavItemsComponent,
        NavShopComponent,
        NavSearchbarComponent
    ],
    imports: [AppRoutingModule, CommonModule],
    exports: [
        HeaderComponent,
        NavItemsComponent,
        NavShopComponent,
        NavSearchbarComponent        
    ]
})

export class HeaderModule {}