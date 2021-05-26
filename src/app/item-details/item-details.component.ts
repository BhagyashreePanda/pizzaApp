import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
items:any;
inventory:any =[];
product:any = [];
item:any = {};

  constructor(private api :DataApiService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('active-item') || '{}');
    this.api.getJInventory().subscribe(response=>{
        this.inventory = response;
      })
      this.api.getJson().subscribe(response=>{
        this.product = response;
        for(let i =0;i<this.product.length;i++){
          if(this.items['id'] == this.product[i]['id']){
            console.log(this.product[i]);
            this.item = this.product[i]
          }
        }
      })
  }

}
