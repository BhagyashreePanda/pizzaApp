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
 // detailPresent: any = JSON.parse(localStorage.getItem('detailPresent')!);
  constructor(private router: Router,private api: DataApiService) { }
checkout() {
        this.router.navigateByUrl('/checkout');
};
  ngOnInit(): void {
    this.api.count.subscribe(c => {
            this.count = c;
        });
  }

}
