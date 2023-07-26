import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BudgetListComponent } from './budget-list/budget-list.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PanelComponent } from './panel/panel.component';

import { AppService } from './app.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    BudgetListComponent,
    WelcomeComponent,
    PanelComponent,
    ModalComponent,
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
