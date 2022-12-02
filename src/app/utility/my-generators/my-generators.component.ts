import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-my-generators',
  templateUrl: './my-generators.component.html',
  styleUrls: ['./my-generators.component.scss']
})
export class MyGeneratorsComponent implements OnInit {

  availableGen:any[];
  sortedGenerators:any[];
  constructor(private util:UtilityService) { }

  ngOnInit(): void {
    this.availableGen=this.util.getAvailableGenerators();
    this.sortedGenerators = this.availableGen.slice(0, 8);
  }

  showMoreGenerators(event: PageChangedEvent){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.sortedGenerators = this.availableGen.slice(startItem, endItem);
    console.log(this.sortedGenerators);
    
  }

}
