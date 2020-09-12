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

  public recipe: ReplaySubject<Recipes> = new ReplaySubject<Recipes>(1);
  public recipes: ReplaySubject<Recipes[]> = new ReplaySubject<Recipes[]>(1);

  constructor(
    private http: HttpClient
  ) { 
    this.loadRecipes().subscribe();
  }

  public loadRecipes() : Observable<Recipes[]> {
    return this.http.get<Recipes[]>(environment.baseUrl + 'recipes').pipe(
      tap((resp) => this.recipes.next(resp))
    );
  }

  public loadRecipe(recipeUuid: String) : Observable<Recipes> {
    return this.http.get<Recipes>(environment.baseUrl + 'recipes?uuid=' + recipeUuid).pipe(
      tap((resp) => this.recipe.next(resp))
    );
  }
}
