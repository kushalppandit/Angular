import{Component,OnInit} from '@angular/core';
import{EmployeeService} from './Employee.Service'

@Component({
    selector: 'emplist',
    templateUrl:'./EmployeeList.Component.html',
    providers:[EmployeeService],
    styleUrls: ["./EmployeeList.Component.css"]
})
export class EmployeeList implements OnInit{
   public employees=[];
    selectedVal: any;
    selectedVal1:any;
    radioaSelected:any;
    IsChecked:boolean;
    CheckedEmp:string;
    CheckSelectedValues=[];
    radioValue:string;
    constructor(private empService:EmployeeService){}
    ngOnInit()
    {
        this.empService.getEmployees().subscribe(resEmpData => this.employees = resEmpData);
    }
    OnCheckSelected(employee:any){
    employee.IsSelected = !employee.IsSelected
    if(employee.IsSelected)
    {
        this.CheckSelectedValues.push(employee.name)
    }
    else if( this.CheckSelectedValues.length > 0 ){
       
    this.CheckSelectedValues.splice(this.CheckSelectedValues.indexOf(employee.name),1);
       
    }
        
    }

    OnRadioSelected(employee:any){
        this.radioaSelected=employee;
    }
}