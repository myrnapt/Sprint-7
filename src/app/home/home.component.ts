import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Budget } from '../app.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.components.scss']

})
export class HomeComponent {
  show: boolean = true;

  showInputs() {
    this.show = !this.show
  }

  budget: Budget = {
    budgetName: '',
    clientName: '',
    webPageService: false,
    seoService: false,
    googleAdsService: false,
    totalPrice: 0
  }

  budgetList: Budget[] = []

  listPrices: number[] = [0]
  webPagePrice: number = 500;
  consultingSeoPrice: number = 300;
  googleAdsPrice: number = 200;
  totalPrice: number = 0;


  sumPrice() {
    this.totalPrice = 0; // Reset the total price before summing the selected services

    if (this.budget.webPageService) {
      this.totalPrice += this.webPagePrice;
    }
  
    if (this.budget.seoService) {
      this.totalPrice += this.consultingSeoPrice;
    }
  
    if (this.budget.googleAdsService) {
      this.totalPrice += this.googleAdsPrice;
    }
  
    // Update the totalPrice property in the budget object
    this.budget.totalPrice = this.totalPrice;
  }

  onSubmit(){
    const newBudget = {...this.budget};
    this.budgetList.push(newBudget);
    this.budget = {
      budgetName: '',
      clientName: '',
      webPageService: false,
      seoService: false,
      googleAdsService: false,
      totalPrice: 0
    };
    console.log(this.budgetList);
  }

  constructor(private mainService: AppService) {}

}
