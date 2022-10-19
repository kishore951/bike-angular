import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
{
  path:"",component:AddBikeComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddBikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
