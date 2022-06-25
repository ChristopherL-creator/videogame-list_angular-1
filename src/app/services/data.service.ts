import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { VideogameClass } from '../model/videogame-class';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gamesArray: BehaviorSubject<VideogameClass[]> = new BehaviorSubject<VideogameClass[]>([]);

  constructor(private apiServ: ApiService) {

    this.apiServ.getGamesFromDb().subscribe({
      next: result => this.gamesArray.next(result),
      error: err => console.log(err)
    });
  }

  getInProd(): Observable<VideogameClass[]>{
    return this.gamesArray.pipe(
      map(array => array.filter(game => game.isInProd === true))
    );

  }

  getOutOfProd(){
    return this.gamesArray.pipe(
      map(array => array.filter(game => game.isInProd === false))
    );
  }

  completeGames(game: VideogameClass): Observable<VideogameClass>{
    const newArray = [...this.gamesArray.value];
    this.gamesArray.next(newArray);
    return this.apiServ.putGame(game);
  }

  removeGames(game: VideogameClass): Observable<VideogameClass>{
    const newArray = this.gamesArray.value.filter(g => g !== game);
    this.gamesArray.next(newArray);
    return this.apiServ.deleteGame(game.id!);
  }

  saveGame(game: VideogameClass){
    if (game.id) {
      return this.apiServ.putGame(game);
    } else {
      return this.apiServ.postGame(game).pipe(
        map(game => {
          const newArray = [...this.gamesArray.value];
          newArray.push(game);
          this.gamesArray.next(newArray);
          return game;
        })
      );
    }
  }

  getGameById(id: string): Observable<VideogameClass | undefined>{
    return this.gamesArray.pipe(
      map(array => array.find(g => g.id === id))
    )
  }
}
