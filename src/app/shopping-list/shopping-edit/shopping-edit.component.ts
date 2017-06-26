import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../service/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("name") nameInput: ElementRef;
  @ViewChild("amount") amountInput: ElementRef;

  constructor(private SLService: ShoppingListService) { }

  addItem() {
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.SLService.addIngredient(ingredient);
  }

  ngOnInit() {
  }

}
