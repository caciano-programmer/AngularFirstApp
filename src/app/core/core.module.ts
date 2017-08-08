import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {AppRouting} from "../routing/app-routing.module";
import {AuthService} from "../auth/authService";
import {DataStorageService} from "../shared/dataStorage.service";
import {RecipeService} from "../recipes/service/recipe.service";
import {ShoppingListService} from "../shopping-list/service/shopping-list.service";

@NgModule({
  declarations: [ HeaderComponent, HomeComponent],
  imports: [SharedModule, AppRouting],
  exports: [AppRouting, HeaderComponent],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService]
})
export class CoreModule {}
