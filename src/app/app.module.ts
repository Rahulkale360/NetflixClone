import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BannerComponent } from './banner/banner.component';
import { NavComponent } from './nav/nav.component';
import {YouTubePlayerModule} from '@angular/youtube-player'

@NgModule({
  declarations: [				
    AppComponent,
      MovieListComponent,
      BannerComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
