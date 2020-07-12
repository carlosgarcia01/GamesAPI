import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url:string = "https://localhost:44314/api/";
  games:Game[];
  constructor(private http:HttpClient) { }


  async getGames(){
    await this.http.get(`${this.url}games`)
                .subscribe(res => this.games = res as Game[])
  }
}
