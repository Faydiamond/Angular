export class CartModel {
  CartId: number;
  CustId: number;
  ProductId: number;
  Quantity: number;
  AddedDate: Date;

  constructor() {
    this.CartId = 0;
    this.CustId = 0;
    this.ProductId = 0;
    this.Quantity = 0;
    this.AddedDate = new Date;
  }
}


export interface CartData {
    cartId: number;
    custId: number;
    productId: number;
    quantity: number;
    productShortName: string;
    addedDate: string;
    productName: string;
    categoryName: string;
    productImageUrl: string;
    productPrice: number;
  }