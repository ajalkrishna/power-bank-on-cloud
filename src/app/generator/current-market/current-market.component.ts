import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { UtilityService } from 'src/app/utility.service';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-current-market',
  templateUrl: './current-market.component.html',
  styleUrls: ['./current-market.component.scss']
})
export class CurrentMarketComponent implements OnInit {


  utilityMarket:any;
  executionArray:any[];

 

  constructor(private util:UtilityService,private gen:GeneratorService) { }

  ngOnInit(): void {
    this.utilityMarket=this.gen.utilityMarket;
    this.executionArray = this.utilityMarket.slice(0, 3);
  
  }
  showMoreInExecution(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.executionArray = this.utilityMarket.slice(startItem, endItem);
  }


}
