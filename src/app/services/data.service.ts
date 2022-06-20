import { Injectable } from '@angular/core';
import { VideogameClass } from '../model/videogame-class';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gamesArray: VideogameClass[] = [];

  constructor(private apiServ: ApiService) {
    this.apiServ.getTodosFromDb().subscribe({
      next: result => this.gamesArray = result,
      error: err => console.log(err)
    })
  }

  getInProd(){
    const tempGames = [];
    for (const game of this.gamesArray) {
      if (game.isInProd !== false) {
        tempGames.push(game);
      }
    }
    return tempGames;
  }

  getOutOfProd(){
    return this.gamesArray.filter(game => game.isInProd === false);
  }
}
