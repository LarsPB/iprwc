import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from "../app-routing.module";
import { ErrorPageRoutingModule } from "./error-page-routing.module";
import { ErrorPageComponent } from "./error-page.component";




@NgModule({
    declarations: [
        ErrorPageComponent
    ],
    imports: [AppRoutingModule, CommonModule, ReactiveFormsModule, NgxPaginationModule, ErrorPageRoutingModule],
    exports: [
        ErrorPageComponent
    ]
})

export class ErrorPageModule {}