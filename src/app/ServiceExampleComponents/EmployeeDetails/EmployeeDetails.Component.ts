import {Component} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EmployeeService } from "app/ServiceExampleComponents/EmployeeListService/Employee.Service";

@Component({

    providers:[EmployeeService],
    templateUrl:'./EmployeeDetails.Component.html'
})

export class EmployeeDetails{
   public empId;
   public employees=[];
   public Message:string='';
    // constructor(private route:ActivatedRoute, private router:Router){
    // this.empId= route.snapshot.params['id'];
    // }
empdata:any;
    constructor(private route:ActivatedRoute, private router:Router, private empService:EmployeeService){
       route.params.subscribe((prms:Params)=>{
        this.empId=parseInt(prms['id']);
         })
    
    }
   ngOnInit()
    {
        this.empService.getEmployees().subscribe(resEmpData => this.employees = resEmpData);
        console.log(this.employees);

    }


    GoPrevious(){
 let previousId=this.empId - 1;
 if(previousId<1)
    {
        this.Message="No Employee with Id "+previousId
    }
    else{
    this.Message='';
    this.router.navigate(['EmployeeDetails',previousId])
    }

    }
    GoNext(){
        let NextId= (this.empId + 1);
   if(NextId>4){ 
       this.Message="No Employee with Id "+NextId
    }
    else{
        this.Message='';
       this.router.navigate(['EmployeeDetails',NextId])
    }
    }

    GoToEmployeeList(){
        let selectedId= this.empId ? this.empId:null;
        this.router.navigate(['Routing',{id:selectedId}])
    }
}