import { Cocktail } from './cocktail.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktailList : Cocktail[] = [
    new Cocktail ("mojito", 10, "https://assets.afcdn.com/recipe/20180705/80255_w648h344c1cx2774cy1849cxt0cyt0cxb5541cyb3691.jpg"),
    new Cocktail ("gin tonic", 8, "https://assets.afcdn.com/recipe/20180801/81651_w648h344c1cx2061cy1395cxt0cyt0cxb4118cyb2787.jpg"),
    new Cocktail ("white russian", 10, "https://assets.afcdn.com/recipe/20180801/81664_w648h344c1cx3976cy2652cxt0cyt0cxb7950cyb5300.jpg"),
  ]
  constructor() { }

  public getCocktails(): Cocktail[] {
    return this.cocktailList;
  }
}
