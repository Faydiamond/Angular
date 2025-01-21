import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  showButton: boolean = true;
  thor: Hero = {
    name: 'thor',
    age: 31,
  };

  getHeroDescription(): string {
    return `${this.thor.name} - ${this.thor.age}`;
  }

  changeHeroDescription(): void {
    this.thor = {
      name: 'batman',
      age: 42,
    };
    this.showButton = false;
  }
}

interface Hero {
  name: string;
  age: number;
}
