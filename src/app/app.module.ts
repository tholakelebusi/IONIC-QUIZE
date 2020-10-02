import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FashionComponent } from './fashion/fashion.component';
import { TravelComponent } from './travel/travel.component';
import { SportComponent } from './sport/sport.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, FashionComponent, TravelComponent, SportComponent, FoodComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
