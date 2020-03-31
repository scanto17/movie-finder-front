import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

imageUrl = "https://image.tmdb.org/t/p/w500"

  constructor(public _movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  
  getMovies(){
    this._movieService.getPopular()
  }

}
