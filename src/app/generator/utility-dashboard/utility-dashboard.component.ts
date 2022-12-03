import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-utility-dashboard',
  templateUrl: './utility-dashboard.component.html',
  styleUrls: ['./utility-dashboard.component.scss']
})
export class UtilityDashboardComponent implements OnInit {

  slides:any[] = [
    {image: '../../assets/t1.png'},
    {image: '../../assets/t2.png'},
    {image: '../../assets/t4.png'}
  ];
  constructor(public util:UtilityService) { }

  ngOnInit(): void {
    
  }


}