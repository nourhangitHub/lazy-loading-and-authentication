import { NoPageComponent } from './no-page.component';
import { Route } from '@angular/router';

export const noPageRoutes: Route[] = [
    { path: '**', component: NoPageComponent}
]