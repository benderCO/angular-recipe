import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesService } from '../../services/recipes/recipes.service';
import { Recipes } from '../../interfaces/recipes/recipes'
import { SpecialsService } from '../../services/specials/specials.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  public recipe: Recipes = null;

  constructor(
    public recipesService: RecipesService,
    public specialsService: SpecialsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.recipesService.loadRecipe(params.get('uuid')).subscribe(
        (res) => {
          this.recipe = res[0]
          this.recipe.ingredients.forEach((ing) => {
            this.specialsService.loadSpecials(ing.uuid).subscribe((resp) => ing.special = resp);
          })
        }
      );
    });
  }
}

