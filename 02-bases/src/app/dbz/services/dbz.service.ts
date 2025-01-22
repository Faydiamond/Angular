import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v1 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root', //singleton
})
export class DbzService {
  constructor() {}

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 4500,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Goten',
      power: 8500,
    },
  ];

  onNewCharacter(character: Character): void {
    //debugger;
    console.log(this.characters);
    console.log(character);

    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
    console.log(this.characters);
  }
  /*
  onDeletedCharacter(i: number): void {
    console.log('Que ve:: ', i);
    this.characters.splice(i, 1);
  }
*/

  deleteCharacterById(id: string): void {
    console.log('Entrasss');

    this.characters = this.characters.filter((character) => character.id != id);
  }

  onNewCharacterr(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power,
    };
  }
}
