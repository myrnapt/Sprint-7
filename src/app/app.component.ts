import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['img { width: 60%;}']
})
export class AppComponent {
  constructor(private mainService: AppService) {}

  get home(): boolean {
    return this.mainService.showHome;
  }

  get calculator(): boolean {
    return this.mainService.calculator;
  }

  hideHome(): void {
    this.mainService.hideHomePage();
  }

  showCalculator(): void {
    this.mainService.showCalculator();
  }
}
