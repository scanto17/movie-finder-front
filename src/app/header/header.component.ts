import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  moviePoster: any;

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  movieGenre : any;
  
  //gets sidenav genre list
  getGenres(){
    this._movieService.getGenre().subscribe( (res : any) => {
      //response handling
      console.log(res)
      this.movieGenre = res.genres;
    }, err => {
      //err handling 
    })
  
  }

  getSpecGenre(genre){
    this._movieService.getGenreRequest(genre)
  }

getPoster(){
  this._movieService.getPoster().subscribe (  (res : any) => {
    console.log(res)
    this.moviePoster = res.posters;
  }, err => {
    // err handling

  })
}
}
