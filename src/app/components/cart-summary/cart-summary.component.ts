import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Student } from 'src/app/models/student';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(student: Student) {
    this.cartService.removeFromCart(student);
  }
}
