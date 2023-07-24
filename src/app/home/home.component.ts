import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['.welcome { text-align: center; }']

})
export class HomeComponent {
  constructor(private mainService: AppService) {}

  get home(): boolean {
    return this.mainService.showHome;
  }

  get calculator(): boolean {
    return this.mainService.calculator;
  }

  hideHome(): void {
    this.mainService.hideHomePage();
  }

  showCalculator(): void {
    this.mainService.showCalculator();
  }
}
