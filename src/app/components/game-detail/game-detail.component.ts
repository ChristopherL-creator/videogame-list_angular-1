import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideogameClass } from 'src/app/model/videogame-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game?: VideogameClass;

  devString = '';

  constructor(private route: ActivatedRoute, private dataServ: DataService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.dataServ.getGameById(param).subscribe({
        next: game => {
          this.game = game,
          this.devString = game? game.softwareHouse.join(', ') : '';
        },
        error: err => console.log(err)
      });
    } else {
      this.game = new VideogameClass('',0,0,[]);
    }
  }

  saveGame(): void{
    if (this.game) {

      if (this.devString === '') {
        this.game.softwareHouse = [];
      } else {
        this.game.softwareHouse = this.devString.split(' ');
      }

      this.dataServ.saveGame(this.game).subscribe({
        next: game => console.log('game', game),
        error: err => console.log(err)
      })
    }
  }
}
