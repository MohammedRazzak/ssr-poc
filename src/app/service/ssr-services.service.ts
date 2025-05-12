import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SsrServicesService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getMessage(){ 
    return this.httpClient.get('https://blog.sary.com/wp-json/wp/v2/posts?lang=en')
  }
}
