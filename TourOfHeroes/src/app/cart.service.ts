import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = []; /* almacenamos productos actuales en el carrito */

  constructor() { }

  addToCart(product)
  {
    this.items.push(product);
  }

  getItems()
  {
    return this.items;
  }

  clearCart()
  {
    this.items = [];
    return this.items;
  }
}
