import {Component, OnInit} from '@angular/core';
import {Hero} from "../domain/hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../service/HeroService";
import {Location} from '@angular/common';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.heroService.getHero(this.route.snapshot.params['id'])
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

}
