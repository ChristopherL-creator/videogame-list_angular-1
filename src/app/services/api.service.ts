import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { VideogameClass } from '../model/videogame-class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URL = 'https://628d3321a3fd714fd040dac4.mockapi.io/games';

  constructor(private http: HttpClient) { }


  getGamesFromDb(){
    return this.http.get<VideogameClass[]>(this.BASE_URL).pipe(
      map(dbObjects => this.convertToGameClass(dbObjects))
      );
    }

  deleteGame(id: string): Observable<any>{

    const url = this.BASE_URL + '/' + id;

    return this.http.delete<any>(url);
  }

  putGame(game: VideogameClass): Observable<VideogameClass>{

    const url = this.BASE_URL + '/' + game.id;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<VideogameClass>(url, VideogameClass.toDbObj(game), httpOptions);
  }

  postGame(game: VideogameClass): Observable<VideogameClass>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<VideogameClass>(this.BASE_URL, VideogameClass.toDbObj(game), httpOptions).pipe(
      map(gameObj => VideogameClass.fromGameObj(gameObj))
    );
  }

    convertToGameClass(dbObjectArray: any[]){
      const gamesArray = [];
      for (const dbObject of dbObjectArray) {
        const newGame = VideogameClass.fromGameObj(dbObject)
        gamesArray.push(newGame)
      }
      return gamesArray;
    }
}
