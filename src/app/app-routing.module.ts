import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutOfProductionComponent } from './components/out-of-production/out-of-production.component';
import { VideogameListComponent } from './components/videogame-list/videogame-list.component';

const routes: Routes = [ 
  {path: 'available', component: VideogameListComponent}, 
  {path: 'unavailable', component: OutOfProductionComponent}, 
  {path: '', redirectTo: '/available', pathMatch: 'full'}, 
  {path: '**', /*component: PageNotFoundComponent*/ redirectTo: '/available'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
