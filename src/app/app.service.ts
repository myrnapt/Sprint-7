import { EventEmitter, Injectable  } from '@angular/core';
import { panelInfo } from './app.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  panelCalculationEmitter: EventEmitter<any> = new EventEmitter();

  
  panelInfo: panelInfo = {
    numPages: 0,
    numLanguage: 0,
    totalPrice: 0,
  }
  
  increaseByPages( value: number ) {
    
    this.panelInfo.numPages += value;
    
  }
  increaseByLanguages( value: number ) {
    this.panelInfo.numLanguage += value;
    
  }
  changeWebPricing() : number {
    return this.panelInfo.numLanguage * this.panelInfo.numPages * 30;

  }

  constructor(private modalService: NgbModal) {}
openModal() {
    // Aquí puedes definir el contenido del modal
    const modalContent = `
      <div class="modal-body">
        <!-- Contenido del modal -->
        <h4>Contenido del modal</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="modal.close('Close click')">Cerrar</button>
      </div>
    `;

    this.modalService.open(modalContent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        console.log('Modal cerrado con resultado:', result);
        // Aquí puedes agregar lógica adicional según lo que necesites hacer después de cerrar el modal.
      },
      (reason) => {
        console.log('Modal despedido:', reason);
        // Maneja cualquier error o razón por la que se haya despedido el modal, si es necesario.
      }
    );
  }

}
