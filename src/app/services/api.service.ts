import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { VideogameClass } from '../model/videogame-class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getGamesFromDb(){
    const url = 'https://628b2f687886bbbb37b2139d.mockapi.io/games'
    return this.http.get<VideogameClass[]>(url).pipe(
      map(dbObjects => this.convertToGameClass(dbObjects))
      );
    }

    convertToGameClass(dbObjectArray: any[]){
      const gamesArray = [];
      for (const dbObject of dbObjectArray) {
        const newGame = VideogameClass.fromGameObj(dbObject)
        gamesArray.push(newGame)
      }
      return gamesArray
    }
}
