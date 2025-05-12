import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrServicesService } from './service/ssr-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular-ssr-poc';
  posts:any;

  constructor(
    private SSRService: SsrServicesService
  ){}

  ngOnInit(): void {
    this.clickME();
  }

  
  clickME(){
    this.SSRService.getMessage().subscribe((res:any)=>{
      console.log("res" , res);
      this.posts = res;
    })
  }
}
