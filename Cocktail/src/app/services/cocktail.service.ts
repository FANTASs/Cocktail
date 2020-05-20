import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  constructor(private httpClient: HttpClient) { }

  public getFilters() {
    return this.httpClient.get(`${API_URL}list.php?c=list`);
  }

  public getCocktails(cocktailName) {
    return this.httpClient.get(`${API_URL}filter.php?c=${cocktailName}`)
  }
}
