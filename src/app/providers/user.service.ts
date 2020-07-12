import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = "https://localhost:44314/api/";
  users:User[];

  constructor(private http:HttpClient) { }


  
  async getUsers(){
     await this.http.get(`${this.url}users`)
          .subscribe(res => this.users = res as User[])
        };
      
 }

/*  postPaymentDetail(data:PaymentDetail){
   let header = new HttpHeaders({'Content-Type':'application/json'});
   return this.http.post(`${this.url}paymentdetails `,data,{headers:header});
 } */

