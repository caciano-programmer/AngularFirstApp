import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {RecipeService} from "../recipes/service/recipe.service";
import {Observable} from "rxjs/Observable";
import {Recipe} from "../recipes/recipe.model";
import 'rxjs/Rx';
import {AuthService} from "../auth/authService";

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipe(): Observable<any> {
    return this.http.put('https://ng-recipebook-962f0.firebaseio.com/recipes.json', this.recipeService.getRecipe());
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http.get('https://ng-recipebook-962f0.firebaseio.com/recipes.json?auth=' + token)
      .map( (response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes)
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
            console.log(recipe);
          }

        return recipes;
      })
      .subscribe( (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
