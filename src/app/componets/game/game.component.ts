import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/providers/game.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private _game:GameService) { 
    this.getGames();
  }

  async getGames(){
    await this._game.getGames()
  }

  
  public get games() : Game[] {
    return this._game.games;
  }
  

  ngOnInit(): void {
  }

}
