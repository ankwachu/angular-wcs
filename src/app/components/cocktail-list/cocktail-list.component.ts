import { CocktailService } from './../../cocktail.service';
import { Cocktail } from './../../cocktail.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }

}
