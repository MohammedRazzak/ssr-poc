import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient:  HttpClient
  ) { }


  getProductList(){ 
    return this.httpClient.get('https://dummyjson.com/products')
  }
  
  getProdutDetails(Id:number){ 
    return this.httpClient.get(`https://dummyjson.com/products/${Id}`)
  }
}
