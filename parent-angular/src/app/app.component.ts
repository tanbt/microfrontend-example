import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'parent-angular';
  public counter = 678;

  public handleOnChildClick(stateCounter: number) {
    console.log(`State counter: ${stateCounter}`);
    this.counter+=2;
  }
}
