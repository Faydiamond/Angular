import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDesignation } from '../../models/interface/designation';
import { ApiRespondeModel } from '../../models/interface/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent  implements OnInit{
  designationList : IDesignation[] = [];
  masterService = inject(MasterService);
  isLoader : boolean = true;
  ngOnInit(): void {
    this.masterService.getAllDesignation().subscribe({
      next: (res: ApiRespondeModel) => {
        this.designationList = res.data;
        this.isLoader= false;
        console.log(this.designationList);
      },
      error: (err) => {
        alert("API error: Network Dawn");
        console.error(err); 
        this.isLoader= false;
      },
    });
    
  }
}
