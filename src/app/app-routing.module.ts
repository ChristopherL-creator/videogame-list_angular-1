import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { OutOfProductionComponent } from './components/out-of-production/out-of-production.component';
import { VideogameListComponent } from './components/videogame-list/videogame-list.component';

const routes: Routes = [
  {path: 'available', component: VideogameListComponent},
  {path: 'unavailable', component: OutOfProductionComponent},
  {path: 'game/:id', component: GameDetailComponent},
  {path: 'game', component: GameDetailComponent},
  {path: '', redirectTo: '/available', pathMatch: 'full'},
  {path: '**', /*component: PageNotFoundComponent*/ redirectTo: '/available'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
