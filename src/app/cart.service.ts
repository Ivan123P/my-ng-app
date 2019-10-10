import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private subject = new Subject<number>();
  private total: number = 0;

  constructor() { }

  setTotal(total: number) {
    this.subject.next(this.total += total);
  }

  clearTotal() {
    this.subject.next();
  }

  getTotal(): Observable<number>{
    return this.subject.asObservable();
  }
}
