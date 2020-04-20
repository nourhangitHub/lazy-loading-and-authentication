import { Routes } from '@angular/router';
import { homeRoutes } from './home/home.routes';
import { indexRoutes } from './index/index.router';
import { noPageRoutes } from './no-page/nopage.routes';

export const routes: Routes = [...homeRoutes, ...indexRoutes, ...noPageRoutes];