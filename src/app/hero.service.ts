import { Injectable } from '@angular/core';
import {HEROES} from './nock-herores';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

/*  getHeroes(): Promise(Hero[]) {
  //  return HEROES;
    return  Promise.resolve(HEROES);
  }*/

  getHeroes(): Observable<Hero[]> {

    return of(HEROES);
  }
}

// Promise
// 비동기 데이타를 순차적으로... 어떤게??????
