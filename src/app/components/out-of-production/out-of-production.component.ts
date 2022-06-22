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
    dataServ.getOutOfProd().subscribe({
      next: games => this.videogames = games,
      error: err => console.log(err)
    })
  }

  ngOnInit(): void {
  }

  manageGameEmission(game: VideogameClass){
    this.refreshArray();
  }

  manageGameDelete(game: VideogameClass){
    this.dataServ.removeGames(game);
  }

  refreshArray(){ }

  orderByName(){
    this.videogames.sort(VideogameClass.compareByName);
  }


}
