import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-ppa-form',
  templateUrl: './ppa-form.component.html',
  styleUrls: ['./ppa-form.component.scss']
})
export class PpaFormComponent implements OnInit {

  constructor(private fb: FormBuilder, public util: UtilityService) { }
  demoForm: any;
  newPpaRequest: any;
  codeOfGen:string='';
  generators: any[];
  chosenGenerator:any;
  typeOfResources: any[];
  currentDate:string="2022-11-29";
  startDate:string="2027-12-31";
  endDate:string="2033-12-31"
  selectStatus:boolean=true;
  checked:boolean=false;



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

    this.generators = this.util.getAvailableGenerators();
    this.typeOfResources = this.util.getTypeOfResources();

    

  }

  get capacityRequested() { return this.newPpaRequest.get('capacityRequested') }
  get fixedCost() { return this.newPpaRequest.get('fixedCost') }
  get variableCost() { return this.newPpaRequest.get('variableCost') }
  submit(formRef) {
    console.log("inside ppa");
    
    let response = this.newPpaRequest.value;
    response.utilityName="Utility C";
    response.utilityId = "4CD5";
    response.generatorName=this.chosenGenerator.generatorName;
    response.generatorCode=this.chosenGenerator.generatorCode;
    response.generatingSource=this.chosenGenerator.generatingSource;
    response.requestDate=this.currentDate;
    response.status='requested';
    this.util.newPpaRequest.next(response)
    this.codeOfGen=''
    // formRef.reset()
    this.newPpaRequest.reset()
    this.checked=false;
    console.log(response);
    console.log(this.util.newPpaRequest.getValue());
    
    

    
  }
  // demo(){
  //   let demo={
  //   generatorName: 'Generator X',
  //   generatorCode:'4567',
  //   generatingSource:'Solar Photovoltaic',
  //   utilityName:'Utility C',
  //   utilityId:'UTC3',
  //   capacityRequested:500,
  //   startDate:'12/17/2022',
  //   validity:'01/01/2023',
  //   fixedCost:5,
  //   variableCost:0.05,
  //   requestDate:'12/3/2022',
  //   status:'requested'
  //   }
  //   this.util.newPpaRequest.next(demo)
  // }

  chooseGenerator(e) {
    // console.log(e.target.value);
    let keyword = e.target.value;
    if (keyword == "Select") {
      this.generators=this.util.getAvailableGenerators();
      this.typeOfResources = [];
      this.typeOfResources = this.util.getTypeOfResources();
      this.codeOfGen='';
    }else{
      this.chosenGenerator = this.generators.find((gen) => gen.generatorName == keyword);
      // console.log(this.chosenGenerator);
      this.codeOfGen=this.chosenGenerator.generatorCode;
      this.typeOfResources = [];
      this.typeOfResources.push(this.chosenGenerator.generatingSource);
    }

    

  }
  chooseType(e) {
    // console.log(e.target.value);
    let keyword = e.target.value
    let generatorList = this.util.getAvailableGenerators();
    if (keyword == "Select...") {
      this.generators = generatorList;
    } else {
      this.generators = generatorList.filter((gen) => gen.generatingSource == keyword);
    }

  }

  findChosenGenerator(code){
    return this.generators.find((gen)=>gen.generatorCode==code)
  }
  termsAndConditions(e){
    this.checked=e.target.checked;
    console.log(this.checked);
    
    
  }

}
