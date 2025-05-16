import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      data => {
        this.recipes = data;
      },
      error => {
        console.error('Error al obtener recetas:', error);
      }
    );
  }

  getCantidadIngredientes(recipe: any): number {
    return recipe.ingredientes?.length || 0;
  }
}
