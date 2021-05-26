import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  counter :any = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0;
    count: BehaviorSubject<number>;
  private _jsonURL ='assets/DATA/products.json';
  private _inventoryURL ='assets/DATA/inventory.json';
  constructor(private Http: HttpClient) { 
      this.count = new BehaviorSubject(this.counter);
  }
   nextCount() {
        this.count.next(++this.counter);
        localStorage.setItem('counter',this.counter);
    }
    resetCount(){
      this.count.next(0);
      debugger;
      localStorage.setItem('counter',this.counter);
    }
    prevCount() {
        this.count.next(--this.counter);
         localStorage.setItem('counter',this.counter)
    }

  getJson():Observable<any>{
    return this.Http.get(this._jsonURL);
  }
  getJInventory():Observable<any>{
    return this.Http.get(this._inventoryURL);
  }
}
