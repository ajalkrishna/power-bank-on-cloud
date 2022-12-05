import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  newPpaFromGenerator= new BehaviorSubject({
    generatorName: '',
    generatorCode: '',
    generatingSource: '',
    utilityName: '',
    utilityId: '',
    capacityRequested: 0,
    startDate: '',
    validity: '',
    fixedCost: 0,
    variableCost: 0,
    requestDate: '',
    status: ''
  });
  ppaTableUpdate = new BehaviorSubject(null)
  // newPpaFromGenerator= new BehaviorSubject({
  //   generatorName: 'Test',
  //   generatorCode: '123',
  //   generatingSource: '11',
  //   utilityName: '222',
  //   utilityId: '222',
  //   capacityRequested: 22,
  //   startDate: '222',
  //   validity: '222',
  //   fixedCost: 22,
  //   variableCost: 22,
  //   requestDate: '2222',
  //   status: 'requested'
  // });
  newContractFromUtility= new BehaviorSubject(null)

  utilityInExecution:any[]=[
    {
      contractId: 1789,
      retailer: "Utility B",
      quantity: "200 kW",
      timeline: "1st Dec '22-28th Feb '23",
      status:"approved"
    },
    {
      contractId: 2156,
      retailer: "Utility P",
      quantity: "500 kW",
      timeline: "1st Nov '22-31st Jan '23"
    },
    {
      contractId: 1654,
      retailer: "Utility D",
      quantity: "220 kW",
      timeline: "1st Nov '22-31st Jan '23"
    },
    {
      contractId: 2212,
      retailer: "Utility B",
      quantity: "360 kW",
      timeline: "1st Nov-31st Jan"
    },
    {
      contractId: 2324,
      retailer: "Utility A",
      quantity: "490 kW",
      timeline: "1st Oct-31st Dec"
    },
    {
      contractId: 9784,
      retailer: "Utility E",
      quantity: "400 kW",
      timeline: "1st Oct-31st Dec"
    },
    {
      contractId: 4521,
      retailer: "Utility F",
      quantity: "325 kW",
      timeline: "1st Oct-31st Dec"
    }
  ]
  utilityExecutionCompleted:any[]=[
    {
      contractId: 1234,
      retailer: "Utility P",
      quantity: "640 kW",
      timeline: "1st Sep-30th Nov"
    },
    {
      contractId: 2312,
      retailer: "Utility Q",
      quantity: "460 kW",
      timeline: "1st Sep-30th Nov"
    },
    {
      contractId: 5678,
      retailer: "Utility C",
      quantity: "700 kW",
      timeline: "1st Oct-30th Nov"
    },
    {
      contractId: 9087,
      retailer: "Utility B",
      quantity: "350 kW",
      timeline: "1st Aug-31st Aug"
    },
    {
      contractId: 5621,
      retailer: "Utility A",
      quantity: "490 kW",
      timeline: "1st Aug-31st Sep"
    },
    {
      contractId: 1756,
      retailer: "Utility B",
      quantity: "500 kW",
      timeline: "1st Jul-30th Sep"
    },
    {
      contractId: 3987,
      retailer: "Utility F",
      quantity: "680 kW",
      timeline: "1st Jul-31st Jul"
    }
  ]
  utilityData:any[]=[
    {
      powerUtility: "Utility A",
      utilityCode: "UTA1"
    },
    {
      powerUtility: "Utility B",
      utilityCode: "UTB2"
    },
    {
      powerUtility: "Utility C",
      utilityCode: "UTC3"
    },
    {
      powerUtility: "Utility D",
      utilityCode: "UTD4"
    },
    {
      powerUtility: "Utility E",
      utilityCode: "UTE5"
    },
    {
      powerUtility: "Utility F",
      utilityCode: "UTF6"
    },
    {
      powerUtility: "Utility P",
      utilityCode: "UTP7"
    },
    {
      powerUtility: "Utility Q",
      utilityCode: "UTQ8"
    }
  ]
  utilityMarket:any[]=[
    {
      powerbanks: "Solar PB",
      growth: 0.021,
      pricePerkw: 1.3
    },
    {
      powerbanks: "Wind PB",
      growth: 0.012,
      pricePerkw: 1.2
    },
    {
      powerbanks: "Solar + Wind PB",
      growth: 0.023,
      pricePerkw: 2.1
    },
    {
      powerbanks: "Solar + Wind + Bio PB",
      growth: 0.011,
      pricePerkw: 2
    },
    {
      powerbanks: "Small Hydro PB",
      growth: 0.022,
      pricePerkw: 1.8
    },
    {
      powerbanks: "Prosumers PB",
      growth: 0.011,
      pricePerkw: 1.2
    }
  ]
  ppaExecution = new BehaviorSubject(this.utilityInExecution);


  constructor() { }
  updateUtilityInExecutionTable(contract){
    this.utilityInExecution.unshift(contract)
  }
}
