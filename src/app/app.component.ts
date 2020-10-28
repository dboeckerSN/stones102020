import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stones';
  public parentProduct: Product = new Product(12, 'Granitstein Gravo', 134.56, 12);

  public onPriceChanged(price: number): void {
    alert('Aktueller preis: ' + price);
  }
}
