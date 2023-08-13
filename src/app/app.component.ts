import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent, HeroDetailComponent],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
