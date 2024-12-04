import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiRespondeModel } from '../models/interface/roles';
import { Constants } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  getAllDesignation():Observable<ApiRespondeModel>{
    return this.http.get<ApiRespondeModel>(environment.ApiUrl+Constants.API_METHOD.GET_ALL_DESIGNATION)
  }
}
