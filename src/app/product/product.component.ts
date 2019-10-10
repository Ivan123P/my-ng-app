import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private product: Product = {
    name: 'name',
    category: 'cat',
    price: 0
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const productId = params['id'];

      this.dataService.getProductById(productId).subscribe((res: Product) => {
        this.product = res;
      });
    });
  }

  private backToList() {
    this.router.navigate(['/products']);
  }

}
