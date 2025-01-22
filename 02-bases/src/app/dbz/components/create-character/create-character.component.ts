import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v1 as uuid } from 'uuid';

@Component({
  selector: 'dbz-create-character',
  standalone: false,

  templateUrl: './create-character.component.html',
  styleUrl: './create-character.component.css',
})
export class CreateCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();
  character: Character = {
    id: uuid(),
    name: '',
    power: 0,
  };

  emiCharacter(): void {
    console.log(this.character);
    if (this.character.name.length <= 3) return;
    this.onNewCharacter.emit(this.character);

    this.clearInputs();
  }

  clearInputs(): void {
    this.character = { name: '', power: 0 };
  }
}
