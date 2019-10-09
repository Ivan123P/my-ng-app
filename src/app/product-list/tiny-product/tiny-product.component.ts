import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product-list.component';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-tiny-product',
  templateUrl: './tiny-product.component.html',
  styleUrls: ['./tiny-product.component.scss']
})

export class TinyProductComponent implements OnInit {

  @Input() public tinyProduct: Product = null;
  @Output() public selectedProduct: EventEmitter<Product> = new EventEmitter<Product>();

  public settings = {
    'product--phone': false,
    'product--notebook': false,
    'product--headset': false
  }

  public buttonText: string = 'купить';

  constructor( 
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.setClass();
  }

  public toCart(): void {
    // this.selectedProduct.emit(this.tinyProduct);
    this.cartService.setTotal(this.tinyProduct.price);
    this.buttonText = 'в корзине';
  }

  public viewProduct(id: number): void {
    this.router.navigate(['/product/', id]);
  }

  private setClass(): void {
    switch (this.tinyProduct.category.toLowerCase()) {
      case 'phone': 
        this.settings['product--phone'] = true;
        break;
      case 'notebook': 
        this.settings['product--notebook'] = true;
        break;
      case 'headset': 
        this.settings['product--headset'] = true;
        break;
    }
  }
}
