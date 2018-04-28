import { Component,OnInit,ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import { EmployeeService } from "app/ServiceExampleComponents/EmployeeListService/Employee.Service";
import { SubjectListService } from "app/ServiceExampleComponents/EmployeeListService/SubjectList.Service";
// import { SubjectListService } from "app/ServiceExampleComponents/EmployeeListService/Studentlist.Service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[EmployeeService,SubjectListService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  check:boolean=true;
  constructor(private router:Router, el:ElementRef){
   
  }
  ngOnInit(){
    this.router.navigate(['/MainMessage']);
  }
  title = 'app';
  HideWelcomeMsg:boolean=false;
  // constructor(){
  //   this.HideWelcomeMsg=false;
  // }
  SelectDiv(opt:any)
  {
   if(opt==1)
   {
     this. HideWelcomeMsg=true;
     this.router.navigate(['/DataBinding']);
   }
   else if(opt==2)
   {
     this. HideWelcomeMsg=true;
     this.router.navigate(['/Template']);
   }
   else if(opt==3)
   {
     this. HideWelcomeMsg=true;
     this.router.navigate(['/ModelDriven']);
   }
   else if(opt==4)
   {
     this. HideWelcomeMsg=true;
     this.router.navigate(['/ModelBuilder']);
   }
   else if(opt==5)
   {
     this. HideWelcomeMsg=true;
     this.router.navigate(['/Services']);
   }
    else if(opt==6)
      {
      this. HideWelcomeMsg=true;
      this.router.navigate(['/Routing']);
      }
    else if(opt==7)
      {
      this. HideWelcomeMsg=true;
      this.router.navigate(['/InputAndOutput']);
      }
    else if(opt==8)
      {
      this. HideWelcomeMsg=true;
      this.router.navigate(['/ClassAndStyle']);
      }
    else if(opt==9)
      {
        this. HideWelcomeMsg=true;
        this.router.navigate(['/CustomDirective']);
      }
      else if(opt==10)
        {
        this. HideWelcomeMsg=true;
        this.router.navigate(['/ParentChildHolder']);
        }
      else if(opt==11){
         this. HideWelcomeMsg=true;
         this.router.navigate(['/webapi']);
      }
  }
}
