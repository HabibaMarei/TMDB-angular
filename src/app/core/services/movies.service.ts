import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly _HttpClient = inject(HttpClient)
  constructor() { }
  getNowPlayingMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${environment.apiKey}`)
  }
  getPopularMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}`)
  }
  getTopRatedMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${environment.apiKey}`)
  }
  getUpcomingMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${environment.apiKey}`)
  }
}
