import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { UtilityService } from 'src/app/utility.service';
import { GeneratorService } from '../generator.service';


@Component({
  selector: 'app-ppa-table',
  templateUrl: './ppa-table.component.html',
  styleUrls: ['./ppa-table.component.scss']
})
export class PpaTableComponent implements OnInit {

  utilityInExecution:any;
  completedUtility:any;
  executionArray:any[];
  completedReturned:any[]
 

  constructor(private util:UtilityService,public gen:GeneratorService) { }

  ngOnInit(): void {
    this.utilityInExecution=this.gen.ppaExecution.getValue();
    this.completedUtility=this.gen.utilityExecutionCompleted;
    this.executionArray = this.utilityInExecution.slice(0, 4);
    this.gen.ppaTableUpdate.next(this.executionArray)
    this.completedReturned =this.completedUtility.slice(0,4);
  }
  showMoreInExecution(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.utilityInExecution=this.gen.ppaExecution.getValue()
    
    this.executionArray = this.utilityInExecution.slice(startItem, endItem);
    this.gen.ppaTableUpdate.next(this.executionArray)
    this.gen.ppaTableUpdate.getValue()
  }
  showMore(event: PageChangedEvent){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.completedReturned = this.completedUtility.slice(startItem, endItem);
    
  }
}
