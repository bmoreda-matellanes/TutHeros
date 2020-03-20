import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private cartService: CartService,
    private formBuilder : FormBuilder) { 
      this.checkoutForm = this. formBuilder.group({
        name:'',
        address:''
      });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    //Process checkout data here
    //Al enviar el pedido
    //el carrito debe borrarse
    //y el formulario debe reiniciarse
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
