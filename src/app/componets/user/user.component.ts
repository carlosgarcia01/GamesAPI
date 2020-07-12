import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private _users:UserService) {
    this.getUsers();
  }
  
  async getUsers(){
    await this._users.getUsers();
  }
  
   public get users() : User[] {
     return this._users.users;
   }
   

  ngOnInit(): void {
  }

}
