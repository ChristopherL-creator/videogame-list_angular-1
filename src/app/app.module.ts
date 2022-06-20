import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VideogameListComponent } from './components/videogame-list/videogame-list.component';
import { VideogameComponent } from './components/videogame/videogame.component';
import { OutOfProductionComponent } from './components/out-of-production/out-of-production.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameListComponent,
    VideogameComponent,
    OutOfProductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
