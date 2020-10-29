import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/products/product.service';
import { Product } from '../product';
import { CustomValidators } from './custom-validator';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public nameLength = 0;

  public productForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    price: new FormControl('', [CustomValidators.positiv]),
    weight: new FormControl('', [CustomValidators.positiv]),
  });

  constructor(
    private pService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productForm.get('name').valueChanges.subscribe(
      (name: string) => this.nameLength = name.length
    );
  }

  public save(): void {
    this.pService.saveProduct({id: 1 , ...this.productForm.value});
    /*
    this.saveProduct({
      id: 1,
      name: this.productForm.get('name').value,
      price: this.productForm.get('price').value,
      weight: this.productForm.get('weight').value,
    });*/
  }

}
