import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProductList(){
    return[{id:1,name:'aata',prize:10,quantity:1,inStock:true},
    {id:2,name:'rice',prize:10,quantity:1,inStock:true},
    {id:3,name:'dal',prize:10,quantity:1,inStock:true}];
  }

}
