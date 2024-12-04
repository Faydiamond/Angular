import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRespondeModel } from '../models/interface/roles';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Client } from '../models/class/client';
import { Constants } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  getAllClients():Observable<ApiRespondeModel>{
    return this.http.get<ApiRespondeModel>(environment.ApiUrl+Constants.API_METHOD.GET_ALL_CLIENTS);
  }
  addUpdate(obj:Client):Observable<ApiRespondeModel>{
    return this.http.post<ApiRespondeModel>(environment.ApiUrl+Constants.API_METHOD.ADDUPDATE_CLIENT,obj)
  }
  delete(id:number):Observable<ApiRespondeModel>{
    return this.http.delete<ApiRespondeModel>(environment.ApiUrl+Constants.API_METHOD.DELETE_CLIENT+id)
  }

  ////////////////////////
  addUpdateClientProject(obj:Client):Observable<ApiRespondeModel>{
    return this.http.post<ApiRespondeModel>(environment.ApiUrl+Constants.API_METHOD.ADDUPDATE_CLIENT_PROJECT,obj)
  }
  getAllEmployee():Observable<ApiRespondeModel>{
    return this.http.get<ApiRespondeModel>(environment.ApiUrl+Constants.API_METHOD.GET_ALL_EMPLOY);
  }
  ////////////////////////////////////////
  getAllProject():Observable<ApiRespondeModel>{
    return this.http.get<ApiRespondeModel>(environment.ApiUrl+Constants.API_METHOD.GET_ALL_PROJECT);
  }
}
