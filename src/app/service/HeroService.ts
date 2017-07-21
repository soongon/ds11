
import {Injectable} from "@angular/core";
import {Hero} from "../domain/hero";
import {HEROES} from "../mock-data/mock-heroes";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) {}

  // 모든 영웅목록 가져오기
  getHeroes(): Observable<Hero[]> {

    return this.http.get('http://localhost:8080/hero');
  }

  getHero(id): Observable<Hero> {
    return this.http.get('http://localhost:8080/hero' + '/' + id);
  }

  // 영웅 등록하기
  addHero(hero: Hero) {

  }
  // 영웅 삭제하기
  removeHero(id: number) {

  }

}
