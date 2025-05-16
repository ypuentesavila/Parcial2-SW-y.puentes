import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  exports: [
    RecipeListComponent,
    RecipeDetailComponent
  ]
})
export class RecipeModule {}
