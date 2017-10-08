import { ProductService } from './../../services/product.service';
import { Product } from './../../model/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProduct: Product;
  productList: Product[];

  constructor(public _productService: ProductService) { }

  ngOnInit() {
    this.productList = this._productService.getProductList();
  }

  getDetails(product:Product){
    this.selectedProduct= product;
  }
}

