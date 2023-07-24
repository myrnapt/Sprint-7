import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
})
export class BudgetListComponent {
  constructor(private mainService: AppService) {}

  get calculator(): boolean {
    return this.mainService.calculator;
  }
  
  showCalculator(): void {
    this.mainService.showCalculator();
  }
}
