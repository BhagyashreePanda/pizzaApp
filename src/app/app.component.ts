import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pdt-calalog';
  user: any = '';
  constructor(private router : Router){}
  ngOnInit(){
    this.user =  localStorage.getItem("user");
    if(this.user) this.router.navigateByUrl('/home');
    else this.router.navigateByUrl('/login');
    
  }
}
