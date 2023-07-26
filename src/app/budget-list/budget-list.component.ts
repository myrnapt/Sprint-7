import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent {
  constructor(private mainService: AppService) {}

}
