import {Recipe} from "../recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list/service/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is simply a test", "http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg", [new Ingredient("test recipe", 1)]),
    new Recipe("Burger Recipe", "What you need for burger", "http://smokeybones.com/wp-content/uploads/2015/11/loaded-bbq-burger.jpg", [new Ingredient("beef", 1), new Ingredient("cheese", 1), new Ingredient("bread", 2)])
  ];

  constructor(private SLService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipeId(id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.SLService.addIngredients(ingredient);
  }
}
