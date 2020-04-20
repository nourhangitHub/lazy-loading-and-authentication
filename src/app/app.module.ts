import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { NoPageComponent } from './no-page/no-page.component';
import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';
import { AuthService } from './sevices/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
