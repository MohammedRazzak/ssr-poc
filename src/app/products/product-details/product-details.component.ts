import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  id:any;


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ){
    this.id = this.route.snapshot.paramMap.get('id');

  }


  ngOnInit(): void {
    this.productDetailsData(this.id)
  }

  productDetailsData(id:number){
    this.productService.getProdutDetails(id).subscribe((res:any) =>{
      this.product = res;
      console.log("this.product" , this.product);
    })
  }
}
