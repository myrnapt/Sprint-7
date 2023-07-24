import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.components.scss']

})
export class HomeComponent {

  show: boolean = false
  showInputs() {
    this.show = true
  }

  constructor(private mainService: AppService) {}

}
