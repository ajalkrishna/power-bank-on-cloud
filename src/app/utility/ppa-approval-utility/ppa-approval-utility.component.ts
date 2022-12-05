import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/generator/generator.service';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-ppa-approval-utility',
  templateUrl: './ppa-approval-utility.component.html',
  styleUrls: ['./ppa-approval-utility.component.scss']
})
export class PpaApprovalUtilityComponent implements OnInit {

  constructor( public gen: GeneratorService,public util:UtilityService) { }
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
    this.ppaRequest=this.gen.newPpaFromGenerator.getValue();
    console.log(this.ppaRequest);
    

  }

  approvePpa(){
    let contract ={
      contractId: 9090,
      generatorName: this.ppaRequest.generatorName,
      retailer:this.ppaRequest.utilityName,
      quantity: this.ppaRequest.capacityRequested,
      generatingSource: this.ppaRequest.generatingSource,
      timeline: `${this.ppaRequest.startDate} to ${this.ppaRequest.validity}`,
      status:'approved'
    }
    let ppaTable=this.util.ppaTableUpdate.getValue();
    console.log(ppaTable);
    
    let updatedTable:any[]=[];
    for(let i=0;i<3;i++){
      updatedTable.push(ppaTable[i])
    }
    updatedTable.unshift(contract)
    console.log(updatedTable);
    this.util.ppaTableUpdate.next(updatedTable)
    this.gen.newPpaFromGenerator.next(this.initial);
    this.gen.newContractFromUtility.next(contract)
    this.gen.updateUtilityInExecutionTable(contract)
    this.util.updateInExcecutionTable(contract)
    this.ppaRequest=this.initial;
  }

}
