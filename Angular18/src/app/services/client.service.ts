import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRespondeModel } from '../models/interface/roles';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Client } from '../models/class/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  getAllClients():Observable<ApiRespondeModel>{
    return this.http.get<ApiRespondeModel>(environment.ApiUrl+"GetAllClients")
  }
  addUpdate(obj:Client):Observable<ApiRespondeModel>{
    return this.http.post<ApiRespondeModel>(environment.ApiUrl+"addUpdateClient",obj)
  }
  delete(id:number):Observable<ApiRespondeModel>{
    return this.http.delete<ApiRespondeModel>(environment.ApiUrl+"DeleteClientByClientId?clientId="+id)
  }
}
