import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-ppa-approve',
  templateUrl: './ppa-approve.component.html',
  styleUrls: ['./ppa-approve.component.scss']
})
export class PpaApproveComponent implements OnInit {

  constructor( public util: UtilityService,private gen:GeneratorService) { }
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
    
  }

  approvePpa(){
    let contract ={
      contractId: 9090,
      generatorName: this.ppaRequest.generatorName,
      retailer: this.ppaRequest.utilityName,
      quantity: this.ppaRequest.capacityRequested,
      generatingSource: this.ppaRequest.generatingSource,
      timeline: `${this.ppaRequest.startDate} to ${this.ppaRequest.validity}`,
      status:'approved'
    }
    let ppaTable=this.gen.ppaTableUpdate.getValue()
    
    let updatedTable:any[]=[];
    for(let i=0;i<3;i++){
      updatedTable.push(ppaTable[i])
    }
    updatedTable.unshift(contract)
   this.gen.ppaTableUpdate.next(updatedTable)
    this.util.newPpaRequest.next(this.initial);
    this.util.newContract.next(contract)
    this.util.updateInExcecutionTable(contract)
    this.gen.updateUtilityInExecutionTable(contract)
    this.ppaRequest=this.initial;
  }

  

}
