import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { DesignationComponent } from './components/designation/designation.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"master",
        pathMatch: "full"
    },
    {
        path:"master",
        component:MasterComponent
    },
    {
        path:"employ",
        component:EmployeeComponent
    },
    {
        path:"clients",
        component:ClientComponent
    },
    {
        path:"designation",
        component:DesignationComponent
    }
];
