import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moviesInfo } from 'services/moviesInfo.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  listaMovies: Array<Object> =[];

  constructor(public service:moviesInfo) {
    this.listaMovies = service.getMovies();
   }

  ngOnInit() {
    
  }

}
