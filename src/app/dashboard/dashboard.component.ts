import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes/recipes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    this.recipesService.loadRecipes();
  }
}
