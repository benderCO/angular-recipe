import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Recipes } from '../../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public recipies: ReplaySubject<Recipes[]> = new ReplaySubject<Recipes[]>(1);

  constructor(
    private http: HttpClient
  ) { 
    this.loadRecipes().subscribe();
  }

  public loadRecipes() : Observable<Recipes[]> {
    return this.http.get<Recipes[]>(environment.baseUrl + 'recipes').pipe(
      tap((resp) => this.recipies.next(resp))
    );
  }
}
