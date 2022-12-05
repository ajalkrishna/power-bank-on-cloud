import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { GeneratorService } from 'src/app/generator/generator.service';
import { UtilityService } from 'src/app/utility.service';


@Component({
  selector: 'app-ppa-table',
  templateUrl: './ppa-table.component.html',
  styleUrls: ['./ppa-table.component.scss']
})
export class PpaTableComponent implements OnInit {

  genInExecution:any;
  completedGen:any;
  executionArray:any[];
  completedReturned:any[]
 

  constructor(public util:UtilityService) { }

  ngOnInit(): void {
    this.genInExecution=this.util.getGeneratorsInExcecution()
    this.completedGen = this.util.getExcecutionCompletedGenerators()
    this.executionArray = this.genInExecution.slice(0, 4);
    this.util.ppaTableUpdate.next(this.executionArray)
    this.completedReturned =this.completedGen.slice(0,4);
    
  }
  showMoreInExecution(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.genInExecution=this.util.getGeneratorsInExcecution()
    this.executionArray = this.genInExecution.slice(startItem, endItem);
    this.util.ppaTableUpdate.next(this.executionArray)
  }
  showMore(event: PageChangedEvent){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.completedReturned = this.completedGen.slice(startItem, endItem);
    // console.log(this.completedReturned);
    
  }
}
