import { Component, Input, OnInit } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.scss']
})
export class VideogameComponent implements OnInit {

  @Input() game?: VideogameClass; // se c'è un name, creo una nuova videogameclass?

  constructor() {

  }

  ngOnInit(): void {
  }

}
