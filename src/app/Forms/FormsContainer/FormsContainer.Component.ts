import { Component } from '@angular/core'
import { Form } from '@angular/forms'
import {AppComponent} from 'app/app.component'
@Component({
    selector: 'Form',
    templateUrl: './FormsContainer.Component.html',
})
export class FormContainerComponent{
    TDFormDiv: boolean;
    MDFormDiv: boolean;
    MDBFormDiv: boolean;
    hideText: boolean;
    constructor(){
        //app.HideWelcomeMsg=true;
        this.hideText = false;
        this.TDFormDiv = true;
        this.MDFormDiv = true;
        this.MDBFormDiv= true;
}
    onFormSelctionButton(value: any) {
        if (value == 11)
        {
            this.hideText = true;
            this.MDFormDiv = true;
            this.MDBFormDiv = true;
            this.TDFormDiv = false;

        }
        else if (value == 12)
        {
            this.hideText = true;
            this.TDFormDiv = true;
            this.MDBFormDiv = true;
            this.MDFormDiv = false;
        }
        else
        {
            this.hideText = true;
            this.TDFormDiv = true;
            this.MDFormDiv = true;
            this.MDBFormDiv = false;
        }
    }

}