import { Component, OnInit , ChangeDetectorRef, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, AfterContentChecked {
products: any = JSON.parse(localStorage.getItem('detailPresent')!);
  pdt : any = JSON.parse(localStorage.getItem('products')!);
 total :any =[];
 sum:any = 0;
  constructor(private cdref: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.total = [];
    console.log(this.products);
    this.cdref.detectChanges();
  }
  ngAfterContentChecked() {
this.cdref.detectChanges();

 }
  getName(id){
    for(let i = 0; i < this.pdt.length;i++){
      if(this.pdt[i].id == id){
        return this.pdt[i].title;
      }
    }
  }
  getPrice(item){
    for(let i = 0; i < this.pdt.length;i++){
      if(this.pdt[i].id == item.id){
        this.total.push(this.pdt[i].price * item.addedCount);
        return this.pdt[i].price * item.addedCount;
      }
    }
  }
  getTotalSum(){
    this.sum = 0;
    let total = this.total.filter((item, i, ar) => ar.indexOf(item) === i);
    for (let i = 0; i < total.length; i++) {
    this.sum = this.sum + total[i];
}
return this.sum;
  }
}
