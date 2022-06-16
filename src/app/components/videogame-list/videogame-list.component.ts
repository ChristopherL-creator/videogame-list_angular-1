import { Component, Input, OnInit } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.scss']
})
export class VideogameListComponent implements OnInit {

  @Input() videogames: VideogameClass[]; 

  constructor() { 
    this.videogames = [];
  }

  ngOnInit(): void {
  }

}
