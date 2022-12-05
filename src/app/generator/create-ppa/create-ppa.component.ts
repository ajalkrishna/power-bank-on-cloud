import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-create-ppa',
  templateUrl: './create-ppa.component.html',
  styleUrls: ['./create-ppa.component.scss']
})
export class CreatePpaComponent implements OnInit {

  constructor(public gen: GeneratorService) { }

  ngOnInit(): void {    
  }

}
