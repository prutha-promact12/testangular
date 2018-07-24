import { Component, OnInit } from '@angular/core';
import { Employee } from './employee-add.model';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  pageTitle: string="Add Employee";
  qualification_list=[];
  experience=[];
  language:[ {languageName : string,isEnable : boolean},
    {languageName : string,isEnable  : boolean},
    {languageName : string,isEnable  : boolean},
    {languageName : string,isEnable  : boolean},
    {languageName : string,isEnable : boolean}];
    obj:Array<any>=[];
  model:any;
 
  firstNameToUpperCase(value: string)
  {
      if(value.length > 0)
      {
        this.model.firstName = value.charAt(0).toUpperCase() +value.slice(1);
      }
      else
      {
          this.model.firstName =value;
      }
  };
 
  onChange(langu:string, isChecked:boolean)
  {
    
    if(isChecked)
      {
      this.model.languages.push(langu);
      }
      else{
        let index =this.model.languages.indexOf(langu);
        this.model.languages.splice(index,1);
      }
  }
  constructor() { }

  ngOnInit() {
               
    this.qualification_list= new Array("MCA", "BCA", "BE" ,"ME");
    this.experience= new Array("6 Month","1 Year","2 Year","3 Year","4 Year","5 Year");
  
    this.language=
                [
                    {languageName : "C/C++",isEnable: true},
                    {languageName : "Java",isEnable  : true},
                    {languageName : "C#",isEnable  : false},
                    {languageName : "PHP",isEnable  : false},
                    {languageName : "Pyphon",isEnable : false},
                ];
                 this.model=new Employee('','','','','','','','','','');
                 /*this.obj={
                 this.model.firstName,
                 this.model.lastName,
                 this.model.email,
                 this.model.contactNo,
                 this.model.address,
                 this.model.userName,
                 this.model.password,
                 this.model.gender,
                 this.model.qualification,
                 this.model.exper}*/
              //  this.model=new Employee('Prutha ','shankpal','prutha@gmail.com');
              
  }
  submit()
  {
    console.log(this.model);
  }

}
