import { Component } from '@angular/core';
import { AppService } from '../../service/app.service';
import { Budget } from '../../interface/app.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.components.scss'],
})
export class HomeComponent {
  constructor(private service: AppService) {}

  //GETTERS
  get budget() : Budget {
    return this.service.budget } 

  get nameError() : boolean {
    return this.service.nameError }

  get clientError() : boolean {
    return this.service.clientError }

  get serviceError() : boolean {
    return this.service.serviceError }
  
  get show() : Boolean {
    return this.service.show }

  // METHODS
  sumPrice() : void {
    this.service.sumPrice() }

  showInputs() : void {
    this.service.showInputs() }

  onSubmit() : void {
    this.service.onSubmit() }

  takeValuePanel() {
    if (
      this.service.budget.webPageService.numLanguage > 0 &&
      this.service.budget.webPageService.numPages > 0
    ) {
      this.service.budget.totalPrice -=
        this.service.budget.webPageService.total;
      this.service.budget.webPageService.total =
        this.service.changeWebPricing();
      this.service.budget.totalPrice +=
        this.service.budget.webPageService.total;
    }
  }
}
