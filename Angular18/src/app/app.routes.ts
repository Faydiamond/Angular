import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { DesignationComponent } from './components/designation/designation.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { LayaoutComponent } from './components/layaout/layaout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch: "full"
    },
   
   
    {
        path:"designation",
        component:DesignationComponent
    },
   
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:LayaoutComponent,
        children:[
            {
                path:"employ",
                component:EmployeeComponent
            },
            {
                path:"clients",
                component:ClientComponent,
                canActivate:[authGuard]
            },
            {
                path:"master",
                component:MasterComponent
            },
            {
                path:"client-project",
                component:ClientProjectComponent
            },
        ]
    }
];
