import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-ppa-approve',
  templateUrl: './ppa-approve.component.html',
  styleUrls: ['./ppa-approve.component.scss']
})
export class PpaApproveComponent implements OnInit {

  constructor( public util: UtilityService) { }
  ppaRequest:any;
  initial:any={
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
  }
  
  ngOnInit(): void {
    this.ppaRequest=this.util.newPpaRequest.getValue();
    console.log(this.ppaRequest);
    

  }

  approvePpa(){
    let contract ={
      contractId: 9090,
      generatorName: this.ppaRequest.generatorName,
      quantity: this.ppaRequest.capacityRequested,
      generatingSource: this.ppaRequest.generatingSource,
      timeline: `${this.ppaRequest.startDate} to ${this.ppaRequest.validity}`,
      status:'approved'
    }
    this.util.newPpaRequest.next(this.initial);
    this.util.newContract.next(contract)
    this.util.updateInExcecutionTable(contract)
    this.ppaRequest=this.initial;
  }

  

}
