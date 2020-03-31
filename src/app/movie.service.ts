import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class MovieService {

    constructor(public _http : HttpClient, public router : Router) { }

    baseUrl : string = "https://api.themoviedb.org"
    api_key : string = "88206dbb514dc1a2bd096a5434aaeebd"

    currentMovies : any;
    

    //https://api.themoviedb.org/3/movie/popular?api_key=88206dbb514dc1a2bd096a5434aaeebd&language=en-US&page=1

    getPopular(){
      this._http.get(`${this.baseUrl}/3/movie/popular?api_key=${this.api_key}&language=en-US&page=1`)
        .subscribe( (res : any) => {
          //response handling
          console.log("res service:", res)
          this.currentMovies = res.results;
        }, err => {
          //err handling 
        })
    
    }
    
    getGenre(){
      return this._http.get(`${this.baseUrl}/3/genre/movie/list?api_key=${this.api_key}&language=en-US`)
    }

    getGenreRequest(genreId){
      this._http.get(`${this.baseUrl}/3/discover/movie?api_key=${this.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
        .subscribe( (res:any) => {
          this.currentMovies = res.results;  
        })
    }
  
    getPoster(){
      return this._http.get(`${this.baseUrl}/movie/{movie_id}/images?api_key=${this.api_key}&language=en-US`)
    }

    getPosterRequest(posterID){

    }

    getSearch(query){
      this._http.get(`${this.baseUrl}/3/search/movie?api_key=${this.api_key}&language=en-US&query=${query}&page=1&include_adult=false`)
      .subscribe( (res:any) => {
        this.currentMovies = res.results; 
        
      }, err => {
        //dictate user experience for error
      })
    }

    
  }



