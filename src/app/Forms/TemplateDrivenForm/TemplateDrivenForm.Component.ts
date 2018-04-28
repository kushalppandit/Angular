import { Component,OnInit,EventEmitter} from '@angular/core'
import { Form } from '@angular/forms'
@Component({
    selector: 'TDForm',
    templateUrl:'./TemplateDrivenForm.Component.html',
    styles: [`input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}`],
})
export class TDFormComponent  {

    OnSubmit(value: any) {
        console.log(value.name);
    }
    
}