import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {DataBindingComponent} from './DataBinding/DataBindingContainer/DataBindingContainer.Component';
import{FormContainerComponent} from './Forms/FormsContainer/FormsContainer.Component';
import{EventBindingComponent} from './DataBinding/EventBinding/EventBinding.Component';
import{EventBindingTwoWayComponent} from './DataBinding/EventBinding(TwoWay)/EventBindingTwoWay.Component';
import{InterpollatonComponent} from './DataBinding/Interpollation/Interpollation.Component';
import{PropertyComponent} from './DataBinding/Property/Property.Component';
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
import{CustomDirective} from 'app/CustomDirectives/CustomDirective.Component'
const routes: Routes = [
    //   {path:'', component:MainMsg},
      {path:'Routing', component:RoutingContainer
    ,children:[{path:'Routing/EmployeeDetails/:id', component:EmployeeDetails}]
    },
      {path:'**', component:MainMsg}
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ChildRoutingModule{}
export const childroutingComponents=[DataBindingComponent,
EmployeeDetails,
RoutingContainer,
]