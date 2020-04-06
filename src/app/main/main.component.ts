import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { UserService }  from '../user.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

imageUrl = "https://image.tmdb.org/t/p/w500"

  constructor(public _movieService: MovieService, public _userService: UserService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  
  favoriteMovie(movie){
    
    console.log(movie)
    let favMovieObj = {
        movieTitle : movie.title,
        thirdPartyMovieId : movie.id,
        movieGenre : movie.genre_ids,
        movieOverview : movie.overview
    }
    this._userService.favMovie(favMovieObj)
    
  }

  getMovies(){
    this._movieService.getPopular()
  }

}
