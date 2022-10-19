import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { FormsModule } from '@angular/forms';
import { ViewBikeComponent } from './view-bike/view-bike.component';
import { HttpClientModule } from '@angular/common/http'

const appRoutes:Routes=[
{
  path:"",component:AddBikeComponent
},
{
  path:"view",component:ViewBikeComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddBikeComponent,
    ViewBikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
