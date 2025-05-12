import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  products:any;


  constructor(
    private productService: ProductService,
  ){}


  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getProductList().subscribe((res:any) =>{
      this.products = res.products;
      console.log("this.products" , this.products);
    })
  }

}
