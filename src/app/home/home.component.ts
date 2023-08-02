import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.components.scss'],
})
export class HomeComponent {
  constructor(public service: AppService) {}

  show: boolean = false;
  showInputs() {
    this.show = !this.show;
  }

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
