import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Orange', 10),
  ];
  onAddIngredient() {
    return this.ingredients.slice();
  }
  onAddingIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
  }
}
