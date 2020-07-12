import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:string = "https://localhost:44314/api/";
  categories:Category[];

  constructor(private http : HttpClient) { }


  async getCategories (){
    await this.http.get(`${this.url}categories`)
                .subscribe(res => this.categories = res as Category[])

  }
}
