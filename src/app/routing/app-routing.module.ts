import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { RecipesComponent } from "../recipes/recipes.component";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";
import {RecipeStartComponent} from "../recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "../recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "../recipes/recipe-edit/recipe-edit.component";
import {SignUpComponent} from "../auth/sign-up/sign-up.component";
import {SignInComponent} from "../auth/sign-in/sign-in.component";
import {AuthGuardService} from "../auth/auth-guard.service";

const appRoutes: Routes = [
  {path: "", redirectTo: "/recipes", pathMatch: 'full'},
  {path: "recipes", component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
  ]},
  {path: "shopping-list", component: ShoppingListComponent},
  {path: "signup", component: SignUpComponent},
  {path: "signin", component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
