import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  showHome = true
  calculator = false

  hideHomePage() {
     this.showHome = false
  }

  showCalculator() {
    this.calculator = true

  }
constructor() { }

}
