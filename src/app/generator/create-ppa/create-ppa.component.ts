import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-create-ppa',
  templateUrl: './create-ppa.component.html',
  styleUrls: ['./create-ppa.component.scss']
})
export class CreatePpaComponent implements OnInit {

  constructor(public util: UtilityService) { }

  ngOnInit(): void {    
  }

}
