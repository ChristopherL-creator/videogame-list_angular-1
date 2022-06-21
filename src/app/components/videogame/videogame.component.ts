import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.scss']
})
export class VideogameComponent implements OnInit {

  @Input() game?: VideogameClass; // se c'è un game, creo una nuova videogameclass?
  @Output() onGameOutOfProd = new EventEmitter<VideogameClass>();
  @Output() onGameDeleted = new EventEmitter<VideogameClass>();

  constructor() {}

  ngOnInit(): void {
  }

  static changeCard(){
    // const card = document.getElementById("card-game");
    // if (card) {
    //   card.style.backgroundImage = "url('./assets/pictures/coffee-pattern.jpg')";
    // }
  }

  isOutOfProd(){
    this.game?.isOutOfProd();
    this.onGameOutOfProd.emit(this.game);
  }

  gameDeleted(){
    this.onGameDeleted.emit(this.game);
  }

}
