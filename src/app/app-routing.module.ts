import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FashionComponent } from './fashion/fashion.component';
import { TravelComponent } from './travel/travel.component';
import { SportComponent } from './sport/sport.component';
import { FoodComponent } from './food/food.component';
import { ScoreComponent } from './score/score.component';
const routes: Routes = [
  { path: 'TABS', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', component:CardsComponent},
  { path: 'fashion', component:FashionComponent},
  { path: 'travel', component:TravelComponent },
  { path: 'sport', component:SportComponent},
  { path: 'food', component:FoodComponent},
  { path: 'score', component:},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
