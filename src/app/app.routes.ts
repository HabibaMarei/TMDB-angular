import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NowPlayingMoviesComponent } from './components/movies/now-playing-movies/now-playing-movies.component';
import { PopularMoviesComponent } from './components/movies/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './components/movies/top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './components/movies/upcoming-movies/upcoming-movies.component';
import { AiringTodayShowsComponent } from './components/shows/airing-today-shows/airing-today-shows.component';
import { OnTheAirShowsComponent } from './components/shows/on-the-air-shows/on-the-air-shows.component';
import { PopularShowsComponent } from './components/shows/popular-shows/popular-shows.component';
import { TopRatedShowsComponent } from './components/shows/top-rated-shows/top-rated-shows.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home' },
    {
        path: 'movies', children: [
            { path: 'nowplaying', component: NowPlayingMoviesComponent, title: 'Now Playing Movies' },
            { path: 'popular', component: PopularMoviesComponent, title: 'Popular Movies' },
            { path: 'toprated', component: TopRatedMoviesComponent, title: 'Top Rated Movies' },
            { path: 'upcoming', component: UpcomingMoviesComponent, title: 'Upcoming Movies' },
        ]
    },
    {
        path: 'shows', children: [
            { path: 'airingtoday', component: AiringTodayShowsComponent, title: 'Airing Today Shows' },
            { path: 'ontheair', component: OnTheAirShowsComponent, title: 'On the Air Shows' },
            { path: 'popular', component: PopularShowsComponent, title: 'Popular Shows' },
            { path: 'toprated', component: TopRatedShowsComponent, title: 'Top rated Shows' },
        ]
    },
    { path: '**', component: NotfoundComponent, title: 'Not Found' }
];
