import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MemberComponent } from './component/member/member.component';
import { NewsComponent } from './component/news/news.component';
import { PhotoComponent } from './component/photo/photo.component';
import { VideoComponent } from './component/video/video.component';
import { LoginComponent } from './component/login/login.component';
import {YouTubePlayerModule} from '@angular/youtube-player';


import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './component/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MemberComponent,
    NewsComponent,
    PhotoComponent,
    VideoComponent,
    LoginComponent,
    PrincipalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
