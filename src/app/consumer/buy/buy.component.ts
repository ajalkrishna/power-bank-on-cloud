import { Component, OnInit } from '@angular/core';
import { BuyDataService } from 'src/app/buy-data.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  quantity!: number;
  capacity!: any;
  cost!: any;
  timeline!:any;
  pbData!: any[];
  constructor(public pb:BuyDataService) { }

  ngOnInit(): void {
    this.pbData=this.pb.getActivepowerBanks().getValue();
  }
confirmBuy(){
console.log(this.timeline);
  console.log(this.cost);
  console.log(this.capacity);
let createTable={
  cost:this.cost,        
  quantity:this.capacity,
  validity:30,
  endDate:this.timeline
}
this.pbData.unshift(createTable);
this.pb.getActivepowerBanks().next(this.pbData);
}
eraseForm(){
  this.cost="";
this.capacity="";
this.timeline="";
}
}
