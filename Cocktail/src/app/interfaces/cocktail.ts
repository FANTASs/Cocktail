export interface IDrinks {
  strCategory: string;
}

export interface ICocktail {
  drinks: Array<IDrinks>;
}
