import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any = [];
  inventory: any = [];
  user:any ='';
  products: any = JSON.parse(localStorage.getItem('detailPresent')!);
  pdt : any = JSON.parse(localStorage.getItem('products')!);
  constructor(private api: DataApiService) { }

  ngOnInit(): void {
    this.user =  localStorage.getItem("user");
    if(this.products?.length>0 && this.pdt?.length>0){
      this.items = this.pdt;
      this.inventory = this.products;
    }else{
    this.getProducts();
    this.getInventory();
    }
  }
  getProducts(){
    this.api.getJson().subscribe(resp=>{
      this.items = resp
    })
  }
  getInventory(){
    this.api.getJInventory().subscribe(response=>{
      this.inventory = response;
    })
  }

}
