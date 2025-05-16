import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../Ingredient';

@Component({
  selector: 'app-ingredient-list',
  standalone: false,
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css',
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients: Ingredient[] = [];
  constructor() {}

  ngOnInit(): void {}
}
