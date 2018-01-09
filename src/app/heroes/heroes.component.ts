import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	hero: myHero = {
	id:1, name: 'Leki'

	heroes = HEROES;


	};
	
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: myHero): void {
    this.selectedHero = hero;
  }

}
