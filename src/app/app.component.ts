import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project-front';
  private apiURL = "https://api.themoviedb.org/3/search/movie?api_key=<88206dbb514dc1a2bd096a5434aaeebd>&query=whiplash&language=de-DE&region=DE"
  data: {}; 
  constructor( private router: Router ){}

  ngOnInit(){
    this.router.navigate([`/main`])
  }

}
