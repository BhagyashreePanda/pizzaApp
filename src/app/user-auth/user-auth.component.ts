import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  constructor(private router: Router, private api: DataApiService) { }
  logIn(user){
    localStorage.setItem('user', user);
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
    this.api.resetCount();
    localStorage.clear();
  }


}
