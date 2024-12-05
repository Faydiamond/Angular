import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiResponseModel } from '../model/product';
import { Customer } from '../model/customer';
import { Login } from '../model/login';
import { CartModel } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  onCartAdded:Subject<boolean> = new Subject<boolean>();
  apiUrl = "https://freeapi.miniprojectideas.com/api/BigBasket/";
  constructor(private http: HttpClient) { }

  getAllProducts() :Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(this.apiUrl+'GetAllProducts');
  }

  getAllCategories() : Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(this.apiUrl+'GetAllCategory');
  }

  getAllCategoryById(categoryId:number) : Observable<ApiResponseModel>{
    const url:string = `${this.apiUrl}getAllProductsByCategory?id=${categoryId}`;
    return this.http.get<ApiResponseModel>(url);
  }
  registerNewCustomer(customer:Customer) : Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(this.apiUrl+'RegisterCustomer',customer);
  }
  onLogin(client:Login) : Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(this.apiUrl+'Login',client);
  }
  addToCar(buy:CartModel) : Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(this.apiUrl+'AddToCart',buy);
  }

  getCartProductsByCustomerId(loggerUserId: number): Observable<ApiResponseModel> {
    const url = `${this.apiUrl}GetCartProductsByCustomerId?id=${loggerUserId}`;
   // console.log("URL>>> ", url);
    return this.http.get<ApiResponseModel>(url);
  }
  deleteProductCart(productId: number): Observable<ApiResponseModel> {
    const url = `${this.apiUrl}DeleteProductFromCartById?id=${productId}`;
   // console.log("URL>>> ", url);
    return this.http.get<ApiResponseModel>(url);
  }
}
