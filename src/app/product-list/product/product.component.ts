import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input() public product: Product = null;
  @Output() public selectedProduct: EventEmitter<Product> = new EventEmitter<Product>();

  public settings = {
    'product--phone': false,
    'product--notebook': false,
    'product--headset': false
  }

  public buttonText: string = 'купить';

  constructor() { }

  ngOnInit() {
    this.setClass();
  }

  public toCart(): void {
    this.selectedProduct.emit(this.product);
    this.buttonText = 'в корзине';
  }

  private setClass(): void {
    switch (this.product.category.toLowerCase()) {
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
