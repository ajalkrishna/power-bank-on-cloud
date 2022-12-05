import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { UtilityService } from 'src/app/utility.service';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-ppa-form',
  templateUrl: './ppa-form.component.html',
  styleUrls: ['./ppa-form.component.scss']
})
export class PpaFormComponent implements OnInit {

  constructor(private fb: FormBuilder, public util: UtilityService,private gen:GeneratorService) { }
  demoForm: any;
  newPpaRequest: any;
  codeOfGen:string='';
  utilities: any[];
  chosenUtility:any;
  typeOfResources: string[]=["Solar Photovoltaic","Wind Generator","Bio-Gas Generator"];
  generatingSource:string;
  currentDate:string="2022-11-29";
  startDate:string="2027-12-31";
  endDate:string="2033-12-31"
  selectStatus:boolean=true;



  ngOnInit(): void {
    this.newPpaRequest = this.fb.group({
      // utilityName: ['TATA Power'],
      // utilityId: ['ACD231'],
      // generatorName: [''],
      // generatorCode: [''],
      capacityRequested: ['',[Validators.required,Validators.min(10),Validators.max(1000)]],
      startDate: [''],
      validity: [''],
      fixedCost: ['',[Validators.required,Validators.min(1),Validators.max(20)]],
      variableCost: ['',[Validators.required,Validators.min(0.01),Validators.max(2)]],
      // requestDate: ['17/11/2022'],
    })

    this.utilities = this.gen.utilityData;
    // this.typeOfResources = this.util.getTypeOfResources();

    

  }

  get capacityRequested() { return this.newPpaRequest.get('capacityRequested') }
  get fixedCost() { return this.newPpaRequest.get('fixedCost') }
  get variableCost() { return this.newPpaRequest.get('variableCost') }
  submit(formRef) {
  
    let response = this.newPpaRequest.value;
    response.utilityName=this.chosenUtility.powerUtility;
    response.utilityId = this.chosenUtility.utilityCode;
    response.generatorName="Genarator 6";
    response.generatorCode="ME88";
    response.generatingSource=this.generatingSource;
    response.requestDate=this.currentDate;
    // this.util.newPpaRequest.next(response)
    response.status='requested';
    this.codeOfGen=''
    // formRef.reset()
    console.log(response);
    this.gen.newPpaFromGenerator.next(response);
    
    this.newPpaRequest.reset()
    
  }

  chooseGenerator(e) {
    // console.log(e.target.value);
    let keyword = e.target.value;
    if (keyword == "Select") {
      this.utilities=this.gen.utilityData;;
      this.codeOfGen='';
    }else{
      this.chosenUtility = this.utilities.find((gen) => gen.utilityCode == keyword);
      this.codeOfGen=this.chosenUtility.utilityCode;
    }

    

  }
  chooseType(e) {
    // console.log(e.target.value);
    let keyword = e.target.value
    this.generatingSource=keyword;
    

  }

  // findChosenGenerator(code){
  //   return this.generators.find((gen)=>gen.generatorCode==code)
  // }

}
