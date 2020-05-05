import { CocktailService } from 'src/app/cocktail.service';
import { Cocktail } from './../../cocktail.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[] = [];
  public service: CocktailService;

  constructor(param_service: CocktailService) {
    this.service = param_service;
  }
  ngOnInit() {
    this.service.getCocktails().subscribe(
      (param_cocktails: Cocktail[]) => {
        this.cocktails = param_cocktails;
      }
    );
  }
}
