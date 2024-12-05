import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './model/customer';
import { FormsModule } from '@angular/forms';
import { MasterService } from './service/master.service';
import { Login } from './model/login';
import { Constant } from './constant/constant';
import { CartData } from './model/cart';
import { ApiResponseModel } from './model/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ecommerce';
  customerObj : Customer = new Customer();
  loginObj : Login = new Login();
  masterService = inject(MasterService);
  isCartPop : boolean=true;
  cart:CartData[]=[];

  loggedUserData: Customer = new Customer();
  @ViewChild("registerModel") registerModel:ElementRef  |  undefined;  //call my hash
  @ViewChild("loginModel") loginModel:ElementRef  |  undefined;
  
  ngOnInit(): void {
    const isUser = localStorage.getItem(Constant.LOCAL_KEY);
    if (isUser !=null){
      const parseUsr = JSON.parse(isUser);
      this.loggedUserData = parseUsr;
      this.getCartItems();
    }
    this,this.masterService.onCartAdded.subscribe((res:boolean)=>{
      if(res){
        this.getCartItems();
      }
    })
  }

  openRegister(){
    if (this.registerModel){
      this.registerModel.nativeElement.style.display = 'block';
    }
  }
  closeRegister(){
    if (this.registerModel){
      this.registerModel.nativeElement.style.display = 'none';
    }
  }

  customerRegister(){
    this.masterService.registerNewCustomer(this.customerObj).subscribe( (res)=>{
      //console.log(`Que ve :: ${this.customerObj}`)
        if(res.result){
          alert('Customer created!');
          this.closeRegister();
        }else{
          alert("I am sorry, Customer didn't create!");
        }
    } );
  }

  openLogin(){
    console.log('open login');
    
    if (this.loginModel){
      this.loginModel.nativeElement.style.display = 'block';
    }
  }
  closeLogin(){
    if (this.loginModel){
      this.loginModel.nativeElement.style.display = 'none';
    }
  }
  onLogin(){
    this.masterService.onLogin(this.loginObj).subscribe( (res)=>{
      //console.log(`Que ve :: ${this.customerObj}`)
      //debugger;
        if(res.result){
          this.loggedUserData = res.data;
          localStorage.setItem(Constant.LOCAL_KEY,JSON.stringify(res.data))
          this.closeRegister();
        }else{
          alert("I am sorry, don't logged");
        }
    } );
  }

  logOff(){
    localStorage.removeItem(Constant.LOCAL_KEY);
    this.loggedUserData = new Customer();
  }

  showCartPop(){
    this.isCartPop = !this.isCartPop;
  }

  //getCartProductsByCustomerId
  getCartItems(){
    this.masterService.getCartProductsByCustomerId(this.loggedUserData.custId).subscribe( (res)=>{
      //debugger;
        if(res.result){
          this.cart = res.data;

        }
    } );
  }

  onRemoveProduct(proId:number){
    this.masterService.deleteProductCart(proId).subscribe( (res)=>{
      //debugger;
        if(res.result){
          alert("Product deleted.")
        }else{
          alert("Product do not delete.")
        }
    } );
  }
}
