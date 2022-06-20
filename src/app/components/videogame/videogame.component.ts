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

  constructor() {}

  ngOnInit(): void {
  }

  isOutOfProd(){
    this.game?.isOutOfProd();
    this.onGameOutOfProd.emit(this.game);
  }

}
