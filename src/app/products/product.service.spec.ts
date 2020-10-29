import { TestBed } from '@angular/core/testing';
import { Product } from '../product/product';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should add passed in product to product list', () => {
    const product = new Product(1, 'name', 111, 122);

    service.saveProduct(product);

    expect(service.getList()[0]).toEqual(product);
  });
});
