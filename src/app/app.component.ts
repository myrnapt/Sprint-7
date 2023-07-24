import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['img { width: 60%;}'],
  
})
export class AppComponent {
  constructor(private mainService: AppService) {}

}
