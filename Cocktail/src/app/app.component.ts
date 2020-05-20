import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cocktailNames = [];
  cocktails = [];

  onClicked(cocktails) {
    if (cocktails === true) {
      this.cocktails = [];
      this.cocktailNames = [];
    } else {
      if (cocktails) {
        this.cocktailNames.push(cocktails[0])
        this.cocktails.push(cocktails[1]);
      }
    }
  }
}
