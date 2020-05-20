import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CocktailService } from '../services/cocktail.service';
import { ICocktail, IDrinks } from '../interfaces/cocktail';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  cocktailNames = [];
  cocktailsNameForRequest = [];
  @Output() onClick = new EventEmitter()

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.getFilters().subscribe((data: ICocktail) => {
      data.drinks.forEach((el: IDrinks) => {
        this.cocktailNames.push(el.strCategory);
      });
      this.cocktailsNameForRequest = [...this.cocktailNames]
    })
  }

  getCocktails() {
    this.onClick.emit(true);
    this.cocktailsNameForRequest.forEach(el => {
      this.cocktailService.getCocktails(el).subscribe((data: ICocktail) => {
        this.onClick.emit(false);
        this.onClick.emit([el, data.drinks]);
      });
    });
  }

  changeCheckbox(elem) {
    if (this.cocktailsNameForRequest.includes(elem)) {
      this.cocktailsNameForRequest.forEach((el, index) => {
        if (el === elem) {
          this.cocktailsNameForRequest.splice(index, 1);
          return;
        }
      })
    } else {
      this.cocktailsNameForRequest.push(elem);
    }
  }
}
