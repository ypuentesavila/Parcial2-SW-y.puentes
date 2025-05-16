import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientListComponent } from '../ingredient.module';

@NgModule({
  imports: [CommonModule, IngredientListComponent],                 
  exports: [IngredientListComponent],   
})
export class IngredientModule {}
export { IngredientListComponent };

