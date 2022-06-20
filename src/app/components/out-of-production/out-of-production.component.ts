import { Component, Input, OnInit } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-out-of-production',
  templateUrl: './out-of-production.component.html',
  styleUrls: ['./out-of-production.component.scss']
})
export class OutOfProductionComponent implements OnInit {

  videogames: VideogameClass[] = [];

  constructor(private dataServ: DataService) {
    this.videogames = dataServ.getOutOfProd();
  }

  ngOnInit(): void {
  }

  manageGameEmission(game: VideogameClass){
    this.refreshArray();
  }

  refreshArray(){
    this.videogames = this.dataServ.getOutOfProd();
  }

  orderByName(){
    this.videogames.sort(VideogameClass.compareByName);
  }

  orderByDate(){
    this.videogames.sort(VideogameClass.compareByDate);
  }
}
