import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
inventory: any = [];
  
  constructor(private api: DataApiService, private router: Router) { }
  viewDetail(id){
    this.router.navigateByUrl(`/item-detail/${id}`);
  }
  addItem(id){
    for(let i = 0; i<this.inventory.length; i++){
      if(this.inventory[i].id == id){
        this.inventory[i].availbility++;
      }
    }
    localStorage.setItem("detailPresent", JSON.stringify(this.inventory));
  }
  removeItem(id){
    for(let i = this.inventory.length-1; i>=0; i--){
      if(this.inventory[i].id == id){
        this.inventory[i].availbility--;
      }
    }
    localStorage.setItem("detailPresent", JSON.stringify(this.inventory));

  }
  deleteItem(id){
    for(let i = this.inventory.length-1; i>=0; i--){
      if(this.inventory[i].id == id){
        this.inventory.splice(i,1);
      }
    }
    localStorage.setItem("detailPresent", JSON.stringify(this.inventory));

  }
    ngOnInit(): void {
    this.inventory = localStorage.getItem('detailPresent');
    
    if(!this.inventory) {
      this.api.getJInventory().subscribe(response=>{
        this.inventory = response;
      })
    }
  }

}
