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
  
    let response = this.newPpaRequest.value;
    response.utilityName="Genarator 3";
    response.utilityId = "ME88";
    response.generatorName=this.chosenGenerator.generatorName;
    response.generatorCode=this.chosenGenerator.generatorCode;
    response.generatingSource=this.chosenGenerator.generatingSource;
    response.requestDate=this.currentDate;
    this.util.newPpaRequest.next(response)
    this.codeOfGen=''
    // formRef.reset()
    this.newPpaRequest.reset()
    
  }

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

}
