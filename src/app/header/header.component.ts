import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public total: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getTotal();
  }

  public getTotal(): void {
    this.total = this.cartService.getTotal();
  }
}
