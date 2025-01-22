import { Component, EventEmitter, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  readonly characterList = input<Character[]>([
    {
      name: 'Trunks',
      power: 20,
    },
  ]);
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeletedCharacter(id?: string): void {
    //console.log(`index:  ${index}`);
    if (!id) return;
    console.log({ id });

    this.onDelete.emit(id);
  }
}
