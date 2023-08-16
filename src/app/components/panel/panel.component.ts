import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Budget } from 'src/app/interface/app.interface';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  
})
export class PanelComponent {
  
  @Output() sendForm = new EventEmitter<any>();
  
  constructor(private service: AppService) { }

  // GETTERS
  get budget() : Budget {
    return this.service.budget
  }

  //METHODS
  increaseByPages(number: number) : void {
    this.service.increaseByPages(number)
  }

  changeWebPricing() : void {
    this.service.changeWebPricing()
  }

  sumPrice() {
    this.service.sumPrice()
  }

  increaseByLanguages(number:number) {
    this.service.increaseByLanguages(number)
  }
}
