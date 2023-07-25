import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import { BudgetListComponent } from './home/budget-list/budget-list.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    BudgetListComponent,
    WelcomeComponent,
      PanelComponent
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
