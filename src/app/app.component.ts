import { Component, Input, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { GAMES, GAMES2 } from './model/mock-videogame';
import { VideogameClass } from './model/videogame-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'list-videogame';
  videoGamesArray: VideogameClass[];

  constructor(){
    this.videoGamesArray = GAMES;
  }

  ngOnInit(): void {

  }


  toBoomerMode(): void {
    const body = document.getElementById("change-body");

    this.videoGamesArray = GAMES2;
    //if(body){
      body!.style.backgroundImage="url('./assets/pictures/coffee-pattern.jpg')";
      body!.style.backgroundRepeat="repeat";


    //}
  }

  changeGameCard(){
    return this.changeCard()
  };

  orderByYear(){
    this.videoGamesArray.sort((obj1, obj2) => {
      if (obj1.publicationDate > obj2.publicationDate) {
          return 1;
      }

      if (obj1.publicationDate < obj2.publicationDate) {
          return -1;
      }

      return 0;
  });
    // return this.videoGamesArray.sort(sortFunction);
  }

  orderByName(){
    this.videoGamesArray.sort((obj1, obj2) => {
      if (obj1.name > obj2.name) {
          return 1;
      }

      if (obj1.name < obj2.name) {
          return -1;
      }

      return 0;
  });
    // return this.videoGamesArray.sort(sortFunction);
  }
}


