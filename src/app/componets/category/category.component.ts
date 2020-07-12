import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/providers/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private _category:CategoryService) { 

    this.getCategories();

  }

  
  public get categories( ) : Category[] {
    return this._category.categories;
  }
  

async getCategories(){

  await this._category.getCategories();

}

  ngOnInit(): void {
  }

}
