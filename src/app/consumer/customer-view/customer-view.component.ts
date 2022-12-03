import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BuyDataService } from 'src/app/buy-data.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  showTable: boolean = true;
  evValue!: number;
  // p =0;
  pbData!: any[];
  billValue!: number;

  calculatedValue!: number;

  chosenUnit:string="miles";

  finalValue!: number;
  title ="chart";
  constructor(public pb:BuyDataService) { 
    
  }
  
//   toggleShowTable(): void {
//     this.showTable = !this.showTable;
// }
  ngOnInit(): void {
    console.log(this.pb.getActivepowerBanks().getValue());
    this.pbData=this.pb.getActivepowerBanks().getValue();

    const data = [
      { month: "Jan", count: 100 },
      { month: "Feb", count: 120 },
      { month: "Mar", count: 100 },
      { month: "Apr", count: 90 },
      { month: "May", count: 140 },
      { month: "Jun", count: 80 },
      { month: "Jul", count: 100 },
      { month: "Aug", count: 130 },
      { month: "Sep", count: 120 },
      { month: "Oct", count: 100 },
      { month: "Nov", count: 110 },
    ];
  
    new Chart(
      "acquisitions",
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.month),
          datasets: [
            {
              label: 'Units Consumed',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  }
  chooseUnit(e:any){

    this.chosenUnit=e.target.value

  }

  calculateRequirement(){
    if(this.evValue==undefined){
      this.evValue=0;
    
    }
    if(this.billValue==undefined){
      this.billValue=0;
    
    }
    console.log(this.evValue);
    console.log(this.billValue);
    let calculatedValue;

  

    if(this.chosenUnit=="kms"){

      calculatedValue=this.evValue*25

    }else{

        calculatedValue=this.evValue/5

      }
    this.finalValue = Math.round(((calculatedValue+this.billValue)/25)/10);

  }
  demo(){
    let update={
      cost:2,        
      quantity:100,
      validity:30,
      endDate:"2nd sep 2022"
    }
this.pbData.unshift(update);
this.pb.getActivepowerBanks().next(this.pbData);

}

}