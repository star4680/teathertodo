import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../nock-herores';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  hero: Hero = {
    id: 1,
    name: 'winstrom'
  };

  selectedHero: Hero;


  hero_list = HEROES;


   // hero: Hero;

  constructor(public heroService: HeroService) {
   /* // 관리가 ...;;;
    this.hero = new Hero();

    // this.hero = new Hero(1 , '222');
    this.hero.id = 1;
    this.hero.name = 'wwwww';*/

  }

/*
  ngOnInit() {
    this.hero_list = this.heroService.getHeroes()
      .then(data => this.hero_list = data);
  }
*/

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(data => this.hero_list = data);
  }



  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
