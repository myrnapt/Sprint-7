import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Budget } from '../app.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.components.scss'],
})
export class HomeComponent {
  constructor(public service: AppService) {}

  show: boolean = true;

  showInputs() {
    this.show = !this.show;
  }

  
}
