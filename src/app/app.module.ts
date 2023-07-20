import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BudgetListComponent } from './budget-list/budget-list.component';

@NgModule({
  declarations: [		
    AppComponent,
      HomeComponent,
      BudgetListComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
