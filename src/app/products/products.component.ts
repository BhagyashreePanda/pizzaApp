import { Component, OnInit, Input } from '@angular/core';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: any = [];
  cart:any =[];
  @Input() detailPresent:any = [];
  grid = true;
  counter:any ;
  constructor(private api: DataApiService) { }

  ngOnInit(): void {
    this.counter = localStorage.getItem('count');
    if(!this.counter){
      this.api.resetCount();
      }
    this.cart = localStorage.getItem('shopping_cart') ? localStorage.getItem('shopping_cart') : [];
    
  }

  addToCart(item:any){
    //this.shopping_cart.addProduct(item);
    for(let i = 0; i < this.products.length;i++){
      if (item["id"] == this.products[i]["id"]){
        this.products[i].itemadded = true;
        
      }
    }
    for(let i = 0; i < this.products.length;i++){
      if (item["id"] == this.detailPresent[i]["id"]){
        this.detailPresent[i].addedCount++;
        //this.cart.push(this.detailPresent[i]);
      }
    }
   
    localStorage.setItem('products', JSON.stringify(this.products));
     localStorage.setItem('detailPresent', JSON.stringify(this.detailPresent));
     if(!localStorage.getItem('count')){
       this.api.resetCount();
     }
        this.api.nextCount();
  }
   removeFromCart(item:any){
      for(let i = 0; i < this.products.length;i++){
      if (item["id"] == this.detailPresent[i]["id"]){
        this.detailPresent[i].addedCount--;
        if(this.detailPresent[i].addedCount == 0){
          this.dereceaseCount(this.detailPresent[i].id);
        }
      }
    }
    localStorage.setItem('products', JSON.stringify(this.products));
     localStorage.setItem('detailPresent', JSON.stringify(this.detailPresent));
     this.api.prevCount();
   }
   dereceaseCount(id){
     for(let i = 0; i < this.products.length;i++){
      if (this.products[i]["id"] == id){
        this.products[i].itemadded = false;
      }
    }
   }
  showGrid(){
    this.grid = !this.grid;
  }
  getItemCount(id){
    for(let i = 0; i < this.detailPresent.length; i++){
      if(this.detailPresent[i].id == id)  return this.detailPresent[i].addedCount;
    }
  }
  getLeft(id){
    for(let i = 0; i < this.detailPresent.length; i++){
      if(this.detailPresent[i].id == id)  return this.detailPresent[i].availbility - this.detailPresent[i].addedCount;
    }
  }

}
