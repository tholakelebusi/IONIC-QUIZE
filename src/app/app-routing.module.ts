import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: 'TABS', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', component:CardsComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
