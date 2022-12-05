import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BuyDataService } from 'src/app/buy-data.service';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  showTable: boolean = true;
  evValue!: number;
  // p =0;
  pbData!: any[];
  pbViewData:any[];
  billValue!: number;
  logData:any[];
  logViewData:any[];

  calculatedValue!: number;

  // chosenUnit:string="miles";

  finalValue!: number;
  title = "chart";
  constructor(public pb: BuyDataService) {

  }

  //   toggleShowTable(): void {
  //     this.showTable = !this.showTable;
  // }
  ngOnInit(): void {
    this.pbData = this.pb.getActivepowerBanks().getValue();
    this.pbViewData=this.pb.getActivepowerBanks().getValue().slice(0,4)
    this.logData=this.pb.logBookData;
    this.logViewData=this.logData.slice(0,5)

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
  showMoreLog(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.logViewData = this.logData.slice(startItem, endItem);
  }
  showMorePb(event: PageChangedEvent){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.pbViewData = this.pbData.slice(startItem, endItem);
  }

  calculateRequirement() {

    if (this.evValue == undefined) {
      this.evValue = 0;

    }
    if (this.billValue == undefined) {
      this.billValue = 0;

    }

    this.finalValue = Math.ceil((((this.evValue / 5) + this.billValue) / 25) / 10);

  }
  demo() {
    let update = {
      cost: 2,
      quantity: 100,
      validity: 30,
      endDate: "2nd sep 2022"
    }
    this.pbData.unshift(update);
    this.pb.getActivepowerBanks().next(this.pbData);

  }

}