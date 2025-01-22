import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './components/create-character/create-character.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, CreateCharacterComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
