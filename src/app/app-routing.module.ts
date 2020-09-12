import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';


const routes: Routes = [
  {
    path: 'recipes',
    component: DashboardComponent,
  },
  {
    path: 'recipes/:uuid',
    component: RecipeDetailsComponent,
  },
  { 
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
