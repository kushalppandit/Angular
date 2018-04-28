import { Component,OnInit,ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import { EmployeeService } from "app/ServiceExampleComponents/EmployeeListService/Employee.Service";
import { SubjectListService } from "app/ServiceExampleComponents/EmployeeListService/SubjectList.Service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[EmployeeService,SubjectListService],
  styleUrls: ['./app.component.css']
})

export class studentservice{
    public stublist=[];
   
    public enableList:boolean=true;
    constructor(private router:Router, el:ElementRef, sub:SubjectListService){
         sub.getEmployees().subscribe(resEmpData => this.stublist = resEmpData);
         console.log(this.stublist[1]);
    }
    onclick(){
        
         this.enableList=false;
         
    }
   
}