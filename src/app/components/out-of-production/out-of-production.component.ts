import { Component, Input, OnInit } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';

@Component({
  selector: 'app-out-of-production',
  templateUrl: './out-of-production.component.html',
  styleUrls: ['./out-of-production.component.scss']
})
export class OutOfProductionComponent implements OnInit {

  @Input() videogames: VideogameClass[]; 

  constructor() { 
    this.videogames = [];
  }

  ngOnInit(): void {
  }

  orderByName(){ 
    this.videogames.sort(VideogameClass.compareByName);
  } 

  orderByDate(){ 
    this.videogames.sort(VideogameClass.compareByDate);
  }
}
