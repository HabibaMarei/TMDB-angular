import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../../core/services/movies.service';
import { IMovie } from '../../../core/interfaces/imovie';

@Component({
  selector: 'app-now-playing-movies',
  imports: [],
  templateUrl: './now-playing-movies.component.html',
  styleUrl: './now-playing-movies.component.scss'
})
export class NowPlayingMoviesComponent implements OnInit {
  constructor() { }
  private readonly _MoviesService = inject(MoviesService)
  NowPlayingList: IMovie[] = []
  getNowPlayingMovies() {
    return this._MoviesService.getNowPlayingMovies().subscribe({
      next: (res) => {
        console.log(res.results)
        this.NowPlayingList = res.results
      },
      error: (error) => {
        console.error(error)
      }
    }
    )
  }
  ngOnInit(): void {
    this.getNowPlayingMovies()
  }
}
