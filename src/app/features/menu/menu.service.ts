import { Injectable } from "@angular/core";
import { Dish } from "src/app/shared/models/dish.model";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  loadDishes(): Dish[] {
    return [
      {
        name: "Nem au porc",
        description:
          "Feuille de riz, viande de porc, champignons noirs, vermicelles de riz et petits légumes",
        imageUrl:
          "https://www.atelierdeschefs.com/media/recette-e1187-nems-a-la-vietnamienne.jpg",
        price: 0.95,
        servingPortion: 1
      },
      {
        name: "Nem au porc",
        description:
          "Feuille de riz, viande de porc, champignons noirs, vermicelles de riz et petits légumes",
        imageUrl:
          "https://www.atelierdeschefs.com/media/recette-e1187-nems-a-la-vietnamienne.jpg",
        price: 0.95,
        servingPortion: 1
      },
      {
        name: "Nem au porc",
        description:
          "Feuille de riz, viande de porc, champignons noirs, vermicelles de riz et petits légumes",
        imageUrl:
          "https://www.atelierdeschefs.com/media/recette-e1187-nems-a-la-vietnamienne.jpg",
        price: 0.95,
        servingPortion: 1
      }
    ];
  }
}
