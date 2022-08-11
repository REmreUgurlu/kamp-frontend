import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(student: Student) {
    let item = CartItems.find((c) => c.student.id === student.id);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.student = student;
      cartItem.quantity = 0;
      cartItem.quantity += 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(student: Student) {
    let item: CartItem = CartItems.find((c) => c.student.id === student.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  list(): CartItem[] {
    return CartItems;
  }
}
