import { Component, OnInit } from "@angular/core";
import { Dish } from "src/app/shared/models/dish.model";
import { MenuService } from "./menu.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.dishes = this.menuService.loadDishes();
  }
}
