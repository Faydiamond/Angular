import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroes: hero[] = [
    { name: 'Batman' },
    { name: 'Spiderman' },
    { name: 'Aquaman' },
    { name: 'Octopus' },
    { name: 'Thor' },
    { name: 'Capitana marvel' },
    { name: 'Capitan america' },
  ];

  public deleteHeroe?: hero;

  deleteHero(): void {
    this.deleteHeroe = this.heroes.pop();
    console.log(`Heroe eliminado:: ${this.deleteHeroe?.name}`);
  }
}

interface hero {
  name: string;
}
