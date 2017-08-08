import {Component} from "@angular/core";
import {DataStorageService} from "../../shared/dataStorage.service";
import {Response} from "@angular/http";
import {AuthService} from "../../auth/authService";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {

  constructor(private storage: DataStorageService, private authService: AuthService) {}

  fetchData() {
    this.storage.getRecipes();
  }

  isAuthenticated() {
    return this.authService.isLoggedIn();
  }

  onLogout() {
    this.authService.logout();
  }

  onSave() {
    this.storage.storeRecipe().subscribe( (response: Response) => console.log(response));
  }
}
