export interface IRol{
    roleId:number,
    role:string
}


export interface ApiRespondeModel{
    message:string,
    result:boolean,
    data:any
}


export interface ClientProject {
    empName: string;
    empId: number;
    empCode: string;
    empEmailId: string;
    empDesignation: string;
    projectName: string;
    startDate: Date;
    expectedEndDate: Date;
    clientName: string;
    clientProjectId: number;
  }