import { Injectable, OnInit } from '@angular/core';

import  Movie  from 'services/moviesInfo'
import {sampleMovies} from "../sample-movies"


@Injectable()
export class moviesInfo implements OnInit{
    movies: Array<Movie> = sampleMovies;

    constructor() { }

    ngOnInit(){

    }
    getMovies(): Array<Movie>{
      return this.movies;
    }
     
    getMovie(id: Number): Movie {  
      let index = 0;
      for (let i=0; i < this.movies.length;i++ ){
        if (id == this.movies[i].id){
          return this.movies[i];
        }
      }
      return null;
     }
}
