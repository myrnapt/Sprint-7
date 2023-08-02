import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Budget } from '../app.interface';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  
  constructor(public service: AppService) { }
 
  budgetArray: Budget[] = [] ;
  budgetArrayOriginal: Budget[] = [] ;
  searchKeyword: string = '';
  searchResults: Budget[] = [] ;
  showSearchResults = false;

  
  ngOnInit() {
    this.budgetArray = this.service.getList();
    this.budgetArrayOriginal = [...this.budgetArray];
  }

  searchBar() {
    if (this.searchKeyword !== '') {
      this.searchResults = this.budgetArray.filter(item => item.budgetName.includes(this.searchKeyword));
      this.showSearchResults = true;
    } else {
      this.showSearchResults = false;
    }
  }

  sortAlphabetically() {
    this.budgetArrayOriginal = [...this.budgetArray]
    this.budgetArray.sort((a: any, b: any) => a.budgetName.localeCompare(b.budgetName));
  }
  
  restartOrder() {
    this.budgetArray = [...this.budgetArrayOriginal];
    this.showSearchResults = false;
  }
}
