import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private total: number = 0;

  constructor() { }

  public setTotal(price: number): void {
    this.total += price;
    console.log(this.total);
  }

  public getTotal(): number {
    return this.total;
  }
}
