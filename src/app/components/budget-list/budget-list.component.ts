import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { Budget } from '../../interface/app.interface';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {


  constructor(private service: AppService) {}

  budgetArray: Budget[] = [];
  budgetArrayOriginal: Budget[] = [];
  searchKeyword: string = '';
  searchResults: Budget[] = [];
  showSearchResults = false;

  ngOnInit() {
    this.budgetArray = this.service.getList();
    this.budgetArrayOriginal = [...this.budgetArray];
  }

  searchBar() {
    if (this.searchKeyword.trim() !== '') {
      const searchTermLowerCase = this.searchKeyword.toLowerCase();
      this.searchResults = this.budgetArray.filter(
        (item) => item.budgetName.toLowerCase().includes(searchTermLowerCase)
      );
      this.showSearchResults = true;
    } else {
      this.showSearchResults = false;
    }
  }

  sortAlphabetically() {
    this.budgetArrayOriginal = [...this.budgetArray];
    this.budgetArray.sort((a: any, b: any) =>
      a.budgetName.localeCompare(b.budgetName)
    );
  }

  restartOrder() {
    this.budgetArray = [...this.budgetArrayOriginal];
    this.showSearchResults = false;
  }
}