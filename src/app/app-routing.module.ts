import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './componets/user/user.component';
import { GameComponent } from './componets/game/game.component';
import { CategoryComponent } from './componets/category/category.component';
import { PlatformComponent } from './componets/platform/platform.component';


const routes: Routes = [
  {path:"users" , component:UserComponent},
  {path:"games" , component:GameComponent},
  {path:"categories" , component:CategoryComponent},
  {path:"platforms" , component:PlatformComponent},
  {path:"login" , component:PlatformComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
