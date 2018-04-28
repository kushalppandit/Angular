import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {DataBindingComponent} from './DataBinding/DataBindingContainer/DataBindingContainer.Component';
import {FormContainerComponent} from './Forms/FormsContainer/FormsContainer.Component';
import {EventBindingComponent} from './DataBinding/EventBinding/EventBinding.Component';
import {EventBindingTwoWayComponent} from './DataBinding/EventBinding(TwoWay)/EventBindingTwoWay.Component';
import {InterpollatonComponent} from './DataBinding/Interpollation/Interpollation.Component';
import {PropertyComponent} from './DataBinding/Property/Property.Component';
import {TDFormComponent} from './Forms/TemplateDrivenForm/TemplateDrivenForm.Component';
import {MDFormComponent} from './Forms/ModelDrivenForm/ModelDrivenForm.Component';
import {ModelBuilderComponent} from './Forms/ModelBuilderApi/ModelBuilderApi.Component';
import {EmployeeList} from './ServiceExampleComponents/EmployeeListService/EmployeeList.Component';
import {MainMsg} from './MainMessageComponent/MainMessageComponent';
import {ParentComponent} from './InputAndOutput/Parent.Component';
import { ChildComponent } from './InputAndOutput/Child.Component';
import {EmployeeDetails} from './ServiceExampleComponents/EmployeeDetails/EmployeeDetails.Component';
import {container} from './InputAndOutput/Container'
import {ClassAndStyleComponent} from './Class&StyleBindng/ClassAndStyle.Component'
import { RoutingContainer } from "app/Routing/RoutingContainer.Component";
import {CustomDirective} from 'app/CustomDirectives/CustomDirective.Component'
import {Child1Component} from './ChildRoute/Child1.Component';
import {Child2Component} from './ChildRoute/Child2.Component';
import {ParentChildHolderComponent} from './ChildRoute/ParentChildHolder.Component';
import { studentservice } from "./WebApi.Component";


const routes: Routes = [
    //   {path:'', component:MainMsg},
      {path:'', redirectTo:'/MainMsg',pathMatch:'full'}, //Can use prefix
      {path:'Template', component:TDFormComponent},
      {path:'ModelDriven', component:MDFormComponent},
      {path:'ModelBuilder', component:ModelBuilderComponent},
      {path:'DataBinding', component:DataBindingComponent},
      {path:'Services', component:EmployeeList},
      {path:'MainMessage', component:MainMsg},
      {path:'InputAndOutput', component:container},
      {path:'EmployeeDetails/:id', component:EmployeeDetails},
      {path:'Routing', component:RoutingContainer},
      {path:'ClassAndStyle', component:ClassAndStyleComponent},
      {path:'CustomDirective', component:CustomDirective},
      {path:'webapi',component:studentservice},
      {path:'ParentChildHolder', component:ParentChildHolderComponent,
             children:[
                      { path:'ParentChildHolder/Child1', component: Child1Component},
                      { path:'ParentChildHolder/Child2', component: Child2Component}
                      ]
      },
      {path:'**', component:MainMsg}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents=[DataBindingComponent,
FormContainerComponent,
EventBindingComponent,
EventBindingComponent,
EventBindingTwoWayComponent,
InterpollatonComponent,
PropertyComponent,
TDFormComponent,
MDFormComponent,
ModelBuilderComponent,
EmployeeList,
MainMsg,
ParentComponent,
ChildComponent,
EmployeeDetails,
container,
ClassAndStyleComponent,
RoutingContainer,
CustomDirective,
Child1Component,
Child2Component,
ParentChildHolderComponent,
studentservice
]