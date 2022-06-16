import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogameListComponent } from './components/videogame-list/videogame-list.component';
import { VideogameComponent } from './components/videogame/videogame.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameListComponent,
    VideogameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
