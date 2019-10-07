import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

export interface Product {
  name: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private productList: [] = [];

  public isFluidItem: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe(
      (res: any) => {
        this.productList = res;
      }
    );
  }

  public setItemFluid(): void {
    this.isFluidItem = !this.isFluidItem;
  }

  public toCart(event: Product): void {
    console.log(event);
  }

}
