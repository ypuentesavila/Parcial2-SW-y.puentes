import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

@NgModule({
  declarations: [IngredientListComponent],
  imports: [CommonModule],
  exports: [IngredientListComponent],
})
export class IngredientModule {}
