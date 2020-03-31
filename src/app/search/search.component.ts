import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form = {
    search: null,  
  }
  constructor(private _movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    
  }

  runSearch(){
    this.router.navigate([`/main`]);
    this._movieService.getSearch(this.form.search);   
  }
}
