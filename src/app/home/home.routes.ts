import { HomeComponent } from './home.component';
import { Route } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { SettingComponent } from './setting/setting.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from '../guards/auth.guard';

export const homeRoutes: Route[] =[
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboadComponent},
            { path: 'setting', component: SettingComponent},
            { path: 'products', component: ProductsComponent}
        ]
    }
]