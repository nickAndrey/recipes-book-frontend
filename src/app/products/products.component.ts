import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../services/app.service';
import {IProductModel} from "../../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsForm: FormGroup;
  products: IProductModel[];

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getProducts().subscribe((data) => {
      this.products = data;
    });

    this.productsForm = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      rating: [''],
    });
  }

  onSubmit(): void {
    this.appService.addProduct(this.productsForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
