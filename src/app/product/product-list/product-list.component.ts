import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/products/product.service';
import { Product } from '../product';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Observable<Product[]>;

  constructor(
    private pService: ProductService,
  ) { }

  ngOnInit(): void {
    this.products = this.pService.getList();
  }

  public onPriceChanged(price: number): void {
    alert('Aktueller preis: ' + price);
  }


}
