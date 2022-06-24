import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'list-videogame';

  constructor(){
  }

  get publicationDate(): Date {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

  getCorrectDate(timestamp: number): Date{
    const milliseconds = timestamp * 1000;
    return new Date(milliseconds);
  }

  toBoomerMode(): void {
      const body = document.getElementById("change-body");

      body!.style.backgroundImage="url('./assets/pictures/coffee-pattern.jpg')";
      body!.style.backgroundRepeat="repeat";

    }

}


