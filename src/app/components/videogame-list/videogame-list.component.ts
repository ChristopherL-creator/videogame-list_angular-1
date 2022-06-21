import { Component, Input, OnInit } from '@angular/core';
import { VideogameClass } from 'src/app/model/videogame-class';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.scss']
})
export class VideogameListComponent implements OnInit {

  // @Input() videogames: VideogameClass[];
  videogames: VideogameClass[] = [];

  constructor(private dataServ: DataService, private apiServ: ApiService) {
    dataServ.getInProd().subscribe({
      next: games => this.videogames = games,
      error: err => console.log(err)
    });
  }

  refreshArray(){
    // this.videogames = this.dataServ.getInProd();
  }

  ngOnInit(): void {
  }

  // manageGameDelete(game: VideogameClass){
  //   this.dataServ.removeGames(game);
  // }

  manageGameEmission(game: VideogameClass){
    this.dataServ.refreshArray();
  }

  orderByName(){
    this.videogames.sort(VideogameClass.compareByName);
  }

  orderByDate(){
    this.videogames.sort(VideogameClass.compareByDate);
  }
}
