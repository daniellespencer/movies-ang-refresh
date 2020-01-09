import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';

  watched = [
      new Movie("1067", "comedy", 2019),
      new Movie("little woman", "drama", 2019)

  ]
  
  toWatch = [
    new Movie("star wars", "sci-fi", 2019),
    new Movie("irishman", "drama", 2019)
  ]
}
