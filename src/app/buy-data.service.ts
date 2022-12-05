import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyDataService {
  powerBankData: any[]=[
    {
      cost:1,        
      quantity:10,
      validity:30,
      endDate:"2022-08-04"
    },
    {
      cost:1.2,        
      quantity:10,
      validity:50,
      endDate:"2022-08-24"
    },
    {
      cost:0.98,        
      quantity:2,
      validity:15,
      endDate:"2022-07-19"
    }
    // {
    //   cost:1.5,        
    //   quantity:10,
    //   validity:30,
    //   endDate:"2022-08-04"
    // }
  ]

  logBookData=[
    {
      logId: 1,
      transactionType: "Used",
      quantity: 0.02,
      application: "EV",
      date: "12th Jan 2022",
      transactionId: 1001
    },
    {
      logId: 2,
      transactionType: "Used",
      quantity: 0.05,
      application: "EV",
      date: "15th Jan 2022",
      transactionId: 1002
    },
    {
      logId: 3,
      transactionType: "Used",
      quantity: 0.08,
      application: "EV",
      date: "19th Jan 2022",
      transactionId: 1003
    },
    {
      logId: 4,
      transactionType: "Used",
      quantity: 0.05,
      application: "EV",
      date: "29th Jan 2022",
      transactionId: 1004
    },
    {
      logId: 5,
      transactionType: "Used",
      quantity: 0,
      application: "EV",
      date: "12th Jan 2022",
      transactionId: 1005
    },
    {
      logId: 6,
      transactionType: "Used",
      quantity: 0.02,
      application: "EV",
      date: "12th Jan 2022",
      transactionId: 1006
    },
    {
      logId: 7,
      transactionType: "Used",
      quantity: 0.02,
      application: "EV",
      date: "12th Jan 2022",
      transactionId: 1007
    },
    {
      logId: 8,
      transactionType: "Used",
      quantity: 0.04,
      application: "EV",
      date: "8th Jan 2022",
      transactionId: 1008
    },
    {
      logId: 9,
      transactionType: "Used",
      quantity: 0.06,
      application: "EV",
      date: "1st Jul 2022",
      transactionId: 1009
    },
    {
      logId: 10,
      transactionType: "Used",
      quantity: 0.01,
      application: "PB-2",
      date: "10th Jul 2022",
      transactionId: 1010
    }
  ]
activePowerBanks=new BehaviorSubject(this.powerBankData);
  constructor() { }
getActivepowerBanks(){
  return this.activePowerBanks;
}
}
