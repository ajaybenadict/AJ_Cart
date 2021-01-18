import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'This is simply Tasty',
      'https://cdn.tasteatlas.com/images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=600&h=450',
      [new Ingredient('meat', 2), new Ingredient('maggi', 4)]
    ),
    new Recipe(
      'Second Recipe',
      'This is very Tasty',
      'https://cdn.tasteatlas.com/images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=600&h=450',
      [new Ingredient('meat', 2), new Ingredient('maggi', 4)]
    ),
    new Recipe(
      'Third Recipe',
      'This is  Tasty',
      'https://cdn.tasteatlas.com/images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=600&h=450',
      [new Ingredient('meat', 2), new Ingredient('maggi', 4)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipe() {
    return this.recipes.slice();
  }
  onAddingIngredientToSL(ingredient: Ingredient[]) {
    this.slService.onAddingIngredients(ingredient);
  }
}
