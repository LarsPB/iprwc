import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { HasRoleGuard } from "../auth/has-role.guard";
import { AdminProductEditComponent } from "./admin-product-edit/admin-product-edit.component";
import { AdminProductListComponent } from "./admin-product-list/admin-product-list.component";
import { AdminComponent } from "./admin.component";



const routes: Routes = [
    { path: "admin", component: AdminComponent, canActivate: [AuthGuard, HasRoleGuard], data: { roles: "ADMIN" }, children: [
        {path: "products", component:AdminProductListComponent },
        {path: "add-product", component:AdminProductEditComponent },
        {path: "edit-product/:id", component:AdminProductEditComponent}
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminProductsRoutingModule{}