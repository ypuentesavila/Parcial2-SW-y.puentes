import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipeDetail(id).subscribe(
      data => {
        this.recipeDetail = data;
      },
      error => {
        console.error('Error al obtener receta:', error);
      }
    );
  }

  getIngredienteMasUsado(): string {
    if (!this.recipeDetail || !this.recipeDetail.ingredientes) return '';

    let mayorCantidad = 0;
    let masUsado = '';

    for (let ing of this.recipeDetail.ingredientes) {
      const match = ing.match(/(.*)-\s*(\d+)/); 
      if (match) {
        const nombre = match[1].trim();
        const cantidad = parseInt(match[2]);
        if (cantidad > mayorCantidad) {
          mayorCantidad = cantidad;
          masUsado = nombre;
        }
      }
    }

    return masUsado;
  }
}
