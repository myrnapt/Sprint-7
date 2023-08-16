import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ModalComponent } from './components/modal/modal.component';
import { PanelComponent } from './components/panel/panel.component';

import { AppService } from './service/app.service';
@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    BudgetListComponent,
    WelcomeComponent,
    PanelComponent,
    ModalComponent
   ],
  imports: [BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
