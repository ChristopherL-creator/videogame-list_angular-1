import { Component, OnInit } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.scss']
})
export class VideogameListComponent implements OnInit {

  videogames: VideogameClass[] = [];

  constructor(private dataServ: DataService, private apiServ: ApiService) {
    dataServ.getInProd().subscribe({
      next: games => this.videogames = games,
      error: err => console.log(err)
    });
  }

  refreshArray(){
  }

  ngOnInit(): void {
  }

  manageGameEmission(game: VideogameClass){
    this.dataServ.refreshArray();
  } 

  manageGameDelete(game: VideogameClass) { 
    this.dataServ.removeGames(game);
  }

  orderByName(){
    this.videogames.sort(VideogameClass.compareByName);
  }
}
