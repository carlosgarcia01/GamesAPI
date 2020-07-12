import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './componets/game/game.component';
import { CategoryComponent } from './componets/category/category.component';
import { UserComponent } from './componets/user/user.component';
import { PlatformComponent } from './componets/platform/platform.component';
import { LoginComponent } from './shared/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CategoryComponent,
    UserComponent,
    PlatformComponent,
    LoginComponent,
    NavbarComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
