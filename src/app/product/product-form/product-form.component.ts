import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from './custom-validator';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() public saveProduct = new EventEmitter<Product>();

  public productForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    price: new FormControl('', [CustomValidators.positiv]),
    weight: new FormControl('', [CustomValidators.positiv]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {
    this.saveProduct.emit({id: 1 , ...this.productForm.value});
    /*
    this.saveProduct.emit({
      id: 1,
      name: this.productForm.get('name').value,
      price: this.productForm.get('price').value,
      weight: this.productForm.get('weight').value,
    });*/
  }

}
