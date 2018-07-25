import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from "@angular/router";
import { moviesInfo } from 'services/moviesInfo.service';


@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movieId: Number;
  movieSelected: Object;
  constructor(public service:moviesInfo, private route: ActivatedRoute) {
    this.route.params
    .subscribe((params) => this.movieId = Number(params['id']));
    this.movieSelected = service.getMovie(this.movieId);}

  ngOnInit() {

  }

}
