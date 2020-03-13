import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*title = 'TourOfHeroes';*/

  ngOnInit() {
    this.resetHeroes();
  }

  currentHero: Hero;

  title = 'Template Syntax';
  name: string = Hero.heroes[0].name;
  hero: Hero; // defined to demonstrate template context precedence
  heroes: Hero[];

   // trackBy change counting
   heroesWithTrackByCountReset = 0;

   // updates with fresh set of cloned heroes
   resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
    this.heroesWithTrackByCountReset = 0;
  }
}

