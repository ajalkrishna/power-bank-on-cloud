import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-my-generators',
  templateUrl: './my-generators.component.html',
  styleUrls: ['./my-generators.component.scss']
})
export class MyGeneratorsComponent implements OnInit {

  availableUtility:any[];
  sortedUtilities:any[];
  constructor(private gen:GeneratorService) { }

  ngOnInit(): void {
    this.availableUtility=this.gen.utilityData;
    this.sortedUtilities = this.availableUtility.slice(0, 4);
  }

  showMoreGenerators(event: PageChangedEvent){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.sortedUtilities = this.availableUtility.slice(startItem, endItem);    
  }

}
