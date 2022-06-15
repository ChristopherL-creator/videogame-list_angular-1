import { Component, OnInit } from '@angular/core';
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

} 


