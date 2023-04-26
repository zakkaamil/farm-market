import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './common/list/list.component';
import { ListItemComponent } from './common/list-item/list-item.component';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    VegetablesComponent,
    NavbarComponent,
    HomeComponent,
    ListComponent,
    ListItemComponent,
    FruitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
