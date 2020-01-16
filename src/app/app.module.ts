import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FormsModule } from '@angular/forms';
import { BooksListComponent } from './books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
