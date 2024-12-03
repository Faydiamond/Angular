import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespondeModel } from '../models/interface/roles';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  getAllDesignation():Observable<ApiRespondeModel>{
    return this.http.get<ApiRespondeModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}
