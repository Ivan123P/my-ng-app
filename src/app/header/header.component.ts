import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public total: number = 0;

  public subscription: Subscription;
  public cart: any;

  constructor(
    private cartService: CartService
  ) {
    this.subscription = this.cartService.getTotal().subscribe(total => {
      this.total = total;
    });
  }

  ngOnInit() {
  }
}
