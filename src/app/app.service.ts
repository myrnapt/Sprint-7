import { EventEmitter, Injectable } from '@angular/core';
import { Budget } from './app.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // VARIABLES
  budget: Budget = {
    budgetName: '',
    clientName: '',
    webPageService: {
      active: false,
      numPages: 1,
      numLanguage: 1,
      total: 0,
    },
    seoService: false,
    googleAdsService: false,
    totalPrice: 0,
  };

  budgetList: Budget[] = [];

  // PRICE CALCULATIONS
  increaseByPages(value: number) {
    this.budget.webPageService.numPages += value;
  }

  increaseByLanguages(value: number) {
    this.budget.webPageService.numLanguage += value;
  }

  changeWebPricing() {
    if (
      this.budget.webPageService.numPages <= 1 &&
      this.budget.webPageService.numLanguage <= 1
    ) {
      this.budget.webPageService.total = 0;
    } else {
      this.budget.webPageService.total =
        this.budget.webPageService.numLanguage *
        this.budget.webPageService.numPages *
        30;
    }
    return this.budget.webPageService.total;
  }

  sumPrice() {
    this.budget.totalPrice = 0;

    if (this.budget.webPageService.active) {
      this.budget.totalPrice += 500;
      this.budget.totalPrice += this.budget.webPageService.total;
    }

    if (this.budget.seoService) {
      this.budget.totalPrice += 300;
    }

    if (this.budget.googleAdsService) {
      this.budget.totalPrice += 200;
    }
  }

  // SEND FORM
  onSubmit() {
    const newBudget = { ...this.budget };
    this.budgetList.push(newBudget);
    this.budget = {
      budgetName: '',
      clientName: '',
      webPageService: {
        active: false,
        numPages: 1,
        numLanguage: 1,
        total: 0,
      },
      seoService: false,
      googleAdsService: false,
      totalPrice: 0,
    };
  }

  getList(): Budget[] {
    return this.budgetList;
  }
}
