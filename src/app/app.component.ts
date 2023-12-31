import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Hero } from './hero';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent, HeroDetailComponent, CommonModule],
})
export class AppComponent implements OnInit {
  constructor() {}
  selectedHero!: Hero;

  ngOnInit() {}
  onHeroSelected(hero: Hero) {
    // console.log(hero);
    this.selectedHero = hero;
  }
}
