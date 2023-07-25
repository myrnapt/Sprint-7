import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  numPages: number = 1;
  numLanguage: number = 1;
  totalPrice: number = 0;
  
  
  constructor() {
    this.numPages = 0;
    this.numLanguage = 0;
    this.totalPrice = 0
   }
  
  changeWebPricing() {
    this.totalPrice = (this.numPages * this.numLanguage * 30)
  }

  increaseByPages( value: number ) {
    this.numPages += value;
  }
  increaseByLanguages( value: number ) {
    this.numLanguage += value;
  }
}
