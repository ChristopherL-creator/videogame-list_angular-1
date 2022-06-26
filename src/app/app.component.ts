import { Component, OnInit } from '@angular/core';
import { VideogameClass } from './model/videogame-class';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'list-videogame';

  constructor(){
  }

  get publicationDate(): number {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

  toBoomerMode(): void {
      const body = document.getElementById("change-body");

      body!.style.backgroundImage="url('./assets/pictures/coffee-pattern.jpg')";
      body!.style.backgroundRepeat="repeat";

    }

}


