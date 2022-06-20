import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { VideogameClass } from '../model/videogame-class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchData(){
    return fetch('https://628b2f687886bbbb37b2139d.mockapi.io/games')
  }

  getTodosFromDb(){
    const url = 'https://628b2f687886bbbb37b2139d.mockapi.io/games'
    return this.http.get<VideogameClass[]>(url).pipe(
      map(dbObjects => this.convertToGameClass(dbObjects))
    )
  }
  
  convertToGameClass(dbObjectsArray: any){
    const gamesArray = []
    for (const dbObject of dbObjectsArray) {
      const newGame = VideogameClass.fromGameObj(dbObject)
      gamesArray.push(newGame)
    }
    return gamesArray
  }
}
