import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	hero: myHero = {
	id:1, name: 'Leki'
	};
	
  constructor() { }

  ngOnInit() {
  }

}
