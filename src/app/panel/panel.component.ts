import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  
})
export class PanelComponent {
  
  @Output() sendForm = new EventEmitter<any>();
  
  constructor(public service: AppService, public modalService: AppService) { }

  openModal() {
    this.modalService.openModal(); // Llama al método del servicio para abrir el modal
  }

  
  
}
