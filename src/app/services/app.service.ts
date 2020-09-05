import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor(private http: HttpClient) { }

getMovies(url: string){
  return this.http.get(url);
}

getTrailerUrl(movieId : any){
  return this.http.get(`http://api.themoviedb.org/3/movie/${movieId}/videos?api_key=818f07c79abfdcef6abfb046cd897e86`);
}

}
