import { Injectable } from '@angular/core';
import { VideogameClass } from '../model/videogame-class';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gameArry: VideogameClass[] = []
  constructor(private apiServ: ApiService) { 
    this.apiServ. getTodosFromDb().subscribe({
      next: result =>this.gameArry = result,
      error: err => console.log(err)
    })
  }

  getInProd(){ 
    const tempGames = []; 
    
  } 

  getOutOfProd(){ 

  }
}
