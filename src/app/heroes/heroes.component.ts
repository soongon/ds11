import { Component, OnInit } from '@angular/core';
import {Hero} from "../domain/hero";
import {HeroService} from "../service/HeroService";
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(data => this.heroes = data);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes', this.selectedHero.id]);
  }
}
