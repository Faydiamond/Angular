import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,

  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public counter: number = 2;
  public message: string = '';

  counterPlus(value: number): void {
    if (this.counter >= 1 && this.counter < 100) {
      this.counter += value;
    } else {
      this.message = `el valor minimo es 0 y l valor maximo es 100`;
    }
  }

  counterLesss(value: number): void {
    if (this.counter >= 2 && this.counter < 100) {
      this.counter += -value;
    } else {
      this.message = `No se aceptan valores negativos.`;
    }
  }

  resetCounter(): void {
    this.counter = 2;
    this.message = '';
  }
}
