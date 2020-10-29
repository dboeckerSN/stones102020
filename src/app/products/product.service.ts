import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = 'http://10.10.2.34:3000';

  constructor(
    private http: HttpClient,
  ) { }

  public getList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + '/products');
  }

  public saveProduct(product: Product): Observable<any> {
    return this.http.post(this.api + '/products', product);
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
