import { Component,Input ,output,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-mybutton',
  imports: [],
  templateUrl: './mybutton.component.html',
  styleUrl: './mybutton.component.css'
})
export class MybuttonComponent {
  @Input() btnText:string = "";
  @Input() btnClass:string = "";  

  @Output() onBtnClicked = new EventEmitter<any>();

  onClick(){
    //debugger;
    this.onBtnClicked.emit('Hey man');
  } 
}
