import {Component} from '@angular/core';
import { EmployeeService } from "app/ServiceExampleComponents/EmployeeListService/Employee.Service";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'routing',
    providers:[EmployeeService],
    templateUrl: './RoutingContainer.Component.html'
})
export class RoutingContainer{
employees=[];
Name:string;
SelectedEmpId:any;
constructor(private empService:EmployeeService, private _route:Router,private route:ActivatedRoute){}
    ngOnInit()
    {
        this.empService.getEmployees().subscribe(EmpData => this.employees = EmpData);
        this.route.params.subscribe((prms:Params)=>{this.SelectedEmpId=parseInt(prms['id'])})
    }
OnSelect(employee:any){
this._route.navigate(['EmployeeDetails',employee.id])
}

IsSelectedEmp(employee){
    return employee.id==this.SelectedEmpId;
}

}