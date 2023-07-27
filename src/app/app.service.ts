import { EventEmitter, Injectable } from '@angular/core';
import { Budget } from './app.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  panelCalculationEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal) {}

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

  listPrices: number[] = [0];
  totalPrice: number = 0;
  
    increaseByPages(value: number) {
      this.budget.webPageService.numPages += value;
    }
  
    increaseByLanguages(value: number) {
      this.budget.webPageService.numLanguage += value;
    }
  
    changeWebPricing() {
      if ( this.budget.webPageService.numPages === 1 &&
        this.budget.webPageService.numLanguage === 1
      ) { this.budget.webPageService.total = 500 } 
      
      else {  this.budget.webPageService.total = (
          this.budget.webPageService.numLanguage *
          this.budget.webPageService.numPages * 30);
      }
      console.log(this.budget.webPageService.total);
    }

  sumPrice() {

    this.totalPrice = 0;

    if (this.budget.webPageService.active) {
      this.totalPrice += 500
      this.totalPrice += (this.budget.webPageService.total);
    }

    if (this.budget.seoService) {
      this.totalPrice += 300;
    }

    if (this.budget.googleAdsService) {
      this.totalPrice += 200;
    }

    this.budget.totalPrice = this.totalPrice;
    console.log(this.totalPrice);
  }

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
    console.log(this.budgetList);
  }

  openModal() {
    // Aquí puedes definir el contenido del modal
    const modalContent = `
      <div class="modal-body">
        <!-- Contenido del modal -->
        <h4>Contenido del modal</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="modal.close('Close click')">Cerrar</button>
      </div>
    `;

    this.modalService
      .open(modalContent, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log('Modal cerrado con resultado:', result);
        },
        (reason) => {
          console.log('Modal despedido:', reason);
        }
      );
  }
}
