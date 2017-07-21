import { Component, OnInit } from '@angular/core';
import {Hero} from "../domain/hero";
import {HeroService} from "../service/HeroService";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
      this.heroes = this.heroes.slice(0,4);
    });
  }

}
