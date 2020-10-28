import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  @Input() public product: Product;
  @Output() public priceChange = new EventEmitter<number>();

  public styleConfig: any = {
    borderStyle: 'dashed'
  };
  public showName = true;

  constructor() {
   }

  ngOnInit(): void {
  }

  public raisePrice(): void {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }

  public lowerPrice(): void {
    this.product.price -= 5.0;
  }

  public toggleName(): void {
    this.showName = !this.showName;
  }
}
