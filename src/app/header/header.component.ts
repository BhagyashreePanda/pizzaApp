import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataApiService } from '../services/data-api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count: any = null;
  user:any = '';
 // detailPresent: any = JSON.parse(localStorage.getItem('detailPresent')!);
  constructor(private router: Router,private api: DataApiService) { }
checkout() {
this.router.navigateByUrl('/checkout');
}
logOut(){
  this.count = null;
  localStorage.clear();
  this.api.resetCount();
  //this.api.count.subscribe(c => {
    this.count = 0;
    localStorage.setItem('count', this.count);
//});
  this.router.navigateByUrl('');
  
}
  ngOnInit(): void {
    this.user =  localStorage.getItem("user");
    this.api.count.subscribe(c => {
            this.count = c;
        });
  }

}
