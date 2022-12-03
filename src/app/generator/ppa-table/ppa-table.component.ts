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

  genInExecution:any;
  utilityInExecution:any;
  completedGen:any;
  completedUtility:any;
  executionArray:any[];
  completedReturned:any[]
 

  constructor(private util:UtilityService,private gen:GeneratorService) { }

  ngOnInit(): void {
    this.genInExecution=this.util.getGeneratorsInExcecution()
    this.utilityInExecution=this.gen.utilityInExecution;
    this.completedGen = this.util.getExcecutionCompletedGenerators()
    this.completedUtility=this.gen.utilityExecutionCompleted;
    this.executionArray = this.utilityInExecution.slice(0, 4);
    this.completedReturned =this.completedUtility.slice(0,4);
  }
  showMoreInExecution(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.executionArray = this.utilityInExecution.slice(startItem, endItem);
  }
  showMore(event: PageChangedEvent){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.completedReturned = this.completedUtility.slice(startItem, endItem);
    // console.log(this.completedReturned);
    
  }
}
