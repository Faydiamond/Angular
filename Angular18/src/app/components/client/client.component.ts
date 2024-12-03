import { Component, inject, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../models/interface/client';
import { ApiRespondeModel } from '../../models/interface/roles';
import { Client } from '../../models/class/client';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [FormsModule,CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  clientobj :Client= new Client();
  clientList:Client[] = [];
  clientService = inject(ClientService);
  isLoader:boolean = true;

  loadClients(){
    this.clientService.getAllClients().subscribe({
      next: (res: ApiRespondeModel) => {
        this.clientList = res.data;
        this.isLoader = false;
       console.log(this.clientList);  
      },
      error: (err) => {
        alert("API error: Network Dawn");
        this.isLoader = false;
        console.error(err); 
      },
    });
  }

  onSaveClient(){
    //console.log(`Me puedes ver: ${this.clientobj}`);
    //debugger;
    this.clientService.addUpdate(this.clientobj).subscribe((res:ApiRespondeModel)=>{
      if(res.result){
        alert("Client created!")
        this.loadClients();
      }else{
        alert("I;m sorry, Client don't create!")
      }
    })
  }

  onDelete(id:number){
    const idFelete = confirm ("Are you sure to want to delete")
    this.clientService.delete(id).subscribe((res:ApiRespondeModel)=>{
      if(res.result){
        alert("Client deleted!")
        this.loadClients();
      }else{
        alert("I;m sorry, Client don't delete!")
      }
    })
  }

  onUpdate(data:Client){
    this.clientobj = data;
  }

  onClean(){
    //this.clientobj = ;
  }

  ngOnInit(): void {
    this.loadClients();
  }

}
