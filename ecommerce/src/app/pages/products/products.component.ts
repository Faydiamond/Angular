import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { ApiResponseModel, Category, Product } from '../../model/product';
import { CartModel } from '../../model/cart';
import { Constant } from '../../constant/constant';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit{
  loggedUserData: Customer= new Customer();
  productsList= signal<Product[]>([]);
  categoriesList= signal<Category[]>([]);
  isLoader:boolean = false;
  //productsList: Product[]=[];
  masterService =inject(MasterService);
  ngOnInit(): void {
    this.loadAllProducts();
    this.loadAllCategories();
  }

  loadAllProducts(){
    this.masterService.getAllProducts().subscribe({
      next: (res: ApiResponseModel) => {
        this.productsList.set(res.data);
        this.isLoader = true;
        console.log(this.productsList);
      },
      error: (err) => {
        alert("API error: Network Dawn");
        console.error(err); 
      },
    });
  }

  loadAllCategories(){
    this.masterService.getAllCategories().subscribe({
      next: (res: ApiResponseModel) => {
        this.categoriesList.set(res.data);
        this.isLoader = true;
        console.log(this.categoriesList);
      },
      error: (err) => {
        alert("API error: Network Dawn");
        console.error(err); 
      },
    });
  }

  getProductById(categoryId:number){
    this.masterService.getAllCategoryById(categoryId).subscribe({
      next: (res: ApiResponseModel) => {
        this.productsList.set(res.data);
      },
      error: (err) => {
        alert("API error: Network Dawn");
        console.error(err); 
      },
    });
  }

  onAddToCart(id:number){
    const newObj : CartModel = new CartModel();
    newObj.ProductId = id;
    newObj.CustId =this.loggedUserData['custId'];
    this.masterService.addToCar(newObj).subscribe( (res)=>{
      //console.log(`Que ve :: ${this.customerObj}`)
        if(res.result){
          alert("Product added to cart")
          this.masterService.onCartAdded.next(true);
        }else{
          alert(res.message);
        }
    } );
  }

  constructor(){
    const isUser = localStorage.getItem(Constant.LOCAL_KEY);
    if (isUser !=null){
      const parseUsr = JSON.parse(isUser);
      this.loggedUserData = parseUsr;
    }
  }
}
