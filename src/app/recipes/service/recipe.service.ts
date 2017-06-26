import {Recipe} from "../recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list/service/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is simply a test", "http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg", [new Ingredient("test recipe", 1)])
  ];

  constructor(private SLService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.SLService.addIngredients(ingredient);
  }
}
