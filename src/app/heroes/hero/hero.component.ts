import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  @Input() hero!: Hero;
  selectedHero?: Hero;

  constructor() {}

  ngOnInit() {
    // console.log(this.hero);
  }
}
