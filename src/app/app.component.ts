import { Component, Input, OnInit } from '@angular/core';
import { GAMES } from './model/mock-videogame';
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


