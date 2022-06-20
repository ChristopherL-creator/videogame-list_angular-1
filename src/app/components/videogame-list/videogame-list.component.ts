import { Component, Input, OnInit } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.scss']
})
export class VideogameListComponent implements OnInit {

  // @Input() videogames: VideogameClass[];
  videogames: VideogameClass[] = [];

  constructor(private dataServ: DataService) {
    this.videogames = dataServ.getInProd();
    // this.videogames = DataService;

  }

  refreshArray(){
    this.videogames = this.dataServ.getInProd();
  }

  ngOnInit(): void {
  }

  manageGameEmission(game: VideogameClass){
    this.refreshArray();
  }

  orderByName(){
    this.videogames.sort(VideogameClass.compareByName);
  }

  orderByDate(){
    this.videogames.sort(VideogameClass.compareByDate);
  }
}
