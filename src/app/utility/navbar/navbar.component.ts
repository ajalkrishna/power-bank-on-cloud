import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/generator/generator.service';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  newPpa:any
  initial:any={
    contractId: 0,
      generatorName: "",
      quantity: 0,
      generatingSource: "",
      timeline: "",
      status:''
  }

  constructor(public util:UtilityService,public gen:GeneratorService) { }

  ngOnInit(): void {
    this.newPpa=this.util.newContract.getValue()
    
  }
  confirmApproval(){
    this.util.newContract.next(this.initial)
  }

}
