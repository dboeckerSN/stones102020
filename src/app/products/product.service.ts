import { Injectable } from '@angular/core';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 0,
      name: 'nisi elit',
      price: 85.59,
      weight: 22
    },
    {
      id: 1,
      name: 'pariatur aliquip',
      price: 122.39,
      weight: 21
    },
    {
      id: 2,
      name: 'nulla cillum',
      price: 151.49,
      weight: 20
    },
    {
      id: 3,
      name: 'id exercitation',
      price: 128.45,
      weight: 23
    },
    {
      id: 4,
      name: 'commodo minim',
      price: 111.34,
      weight: 21
    },
    {
      id: 5,
      name: 'duis tempor',
      price: 164.61,
      weight: 24
    },
    {
      id: 6,
      name: 'excepteur nostrud',
      price: 51.62,
      weight: 38
    }
  ];

  constructor() { }

  public getList(): Product[] {
    return this.products;
  }

  public saveProduct(product: Product): void {
    this.products.unshift(product);
  }
}

export class MockProductService {
  getList(): Product[] {
    return [
      new Product(0, 'test', 1, 2),
      new Product(1, 'test1', 2, 3),
    ];
  }

  saveProduct(product: Product): void {
  }
}
