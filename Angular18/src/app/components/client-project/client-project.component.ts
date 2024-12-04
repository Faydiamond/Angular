import { Component, inject, OnInit, signal } from '@angular/core';
import { Client } from '../../models/class/client';
import { ClientService } from '../../services/client.service';
import { ApiRespondeModel, ClientProject} from '../../models/interface/roles';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { Employee } from '../../models/interface/employee';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule,DatePipe,AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent  implements OnInit{
   
  employeeList:Employee[] = [];
  clientList:Client[] = [];
  clientProjectService = inject(ClientService);
  isLoader:boolean = true;
  projectList = signal<ClientProject[]>([]);
  //projectList : ClientProject[]=[];

  
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl('',[Validators.required, Validators.minLength(5)]),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl('',[Validators.required]),
    projectCost: new FormControl('',[Validators.required]),
    projectDetails: new FormControl('',[Validators.required, Validators.minLength(5)]),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl('')
  });

  ngOnInit(): void {
    this.getAllEmploys();
    this.getAllClients();
    this.getAllClientProjects();
  }

  getAllEmploys(){
    this.clientProjectService.getAllEmployee().subscribe({
      next: (res: ApiRespondeModel) => {
        this.employeeList = res.data;
        
       console.log("employs:: " ,this.employeeList);  
      },
      error: (err) => {
        alert("API error: Network Dawn");
  
        console.error(err); 
      },
    });
  }

  getAllClients(){
    this.clientProjectService.getAllClients().subscribe({
      next: (res: ApiRespondeModel) => {
        this.clientList = res.data;

       console.log("clients:" ,this.clientList);  
      },
      error: (err) => {
        alert("API error: Network Dawn");
       
        console.error(err); 
      },
    });
  }
  //Signal
  getAllClientProjects(){
    this.clientProjectService.getAllProject().subscribe({
      next: (res: ApiRespondeModel) => {
        this.projectList.set( res.data);
        this.isLoader = false;
       console.log("clients:" ,this.projectList);  
      },
      error: (err) => {
        alert("API error: Network Dawn");
        this.isLoader = false;
        console.error(err); 
      },
    });
  }

  onSaveProject(){
    const formValue = this.projectForm.value;
    formValue.startDate =new Date(formValue.startDate)
    formValue.expectedEndDate = new Date( formValue.expectedEndDate);
    formValue.completedDate = new Date( formValue.completedDate);
    debugger;
    this.clientProjectService.addUpdateClientProject(formValue).subscribe((res:ApiRespondeModel)=>{
      if(res.result){
        alert("Client project created!")
        console.log("Client project created!");
        
      }else{
        alert("I;m sorry, Client project don't create!")
        console.log("Client do not project created!");
      }
    })
  }
  onClean(){
    this.projectForm.reset();
  }
}