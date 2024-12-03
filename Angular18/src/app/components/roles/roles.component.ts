import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { ApiRespondeModel, IRol } from '../../models/interface/roles'
import { CommonModule } from '@angular/common';


interface myStruct {
  title: string,
  version: number,
  isActive : boolean,
  date : Date
}

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit{
  roleList :IRol[] = [];
  http = inject(HttpClient);
  ngOnInit(): void {
   this.getAllRols();


  }

  public getAllRols(){
    this.http.get<ApiRespondeModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:ApiRespondeModel)=>{
      this.roleList = res.data;
      console.log(this.roleList);
      
    })
  }







  /*
  gender:string='';
  title:string ="Name";
  inputType:string = "radio";
  data: myStruct = {
    title:"Angular",
    version: 18,
    isActive: true,
    date : new Date()
  }
  showGender(gender:string) {
    alert(`your gender is: ${gender}`)
  }
*/
}
