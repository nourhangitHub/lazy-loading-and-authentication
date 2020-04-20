import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboadComponent } from './dashboad/dashboad.component';
import { ProductsComponent } from './products/products.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboadComponent, ProductsComponent, SettingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class HomeModule { }
