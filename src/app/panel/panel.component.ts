import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  
})
export class PanelComponent {
  
  constructor(public service: AppService) {}



  
}
