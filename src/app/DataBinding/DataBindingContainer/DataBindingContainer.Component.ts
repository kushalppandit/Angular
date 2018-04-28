import { Component } from '@angular/core'
import { Form } from '@angular/forms'
import {AppComponent} from 'app/app.component'
import {Router} from '@angular/router';

@Component({
    selector: 'DataBinding',
    templateUrl: './DataBindingContainer.Component.html',
    styleUrls: ['./DataBindingContainer.Component.css'],
    inputs:['parentData']
})
export class DataBindingComponent {
    router:Router;
  public parentData:boolean;
    
    HideDataBindingMsg: boolean;
    HideEventBindingTag: boolean;
    HideEventBinding_TwoWayTag: boolean;
    HideInterpollationTag: boolean;
    HidePropertyBindingTag: boolean;
    constructor() {
        //hideappmsg.HideWelcomeMsg=true;
        this.HideDataBindingMsg = false;
        this.HideEventBindingTag = true;
        this.HideEventBinding_TwoWayTag = true;
        this.HideInterpollationTag = true;
        this.HidePropertyBindingTag = true;
    }
    onBindingTypeSelctionButton(value: any) {
        if (value == 1) {
            this.HideDataBindingMsg = true;
            this.HideEventBinding_TwoWayTag = true;
            this.HideEventBindingTag = true;
            this.HidePropertyBindingTag = true;
            this.HideInterpollationTag = false;

        }
        else if (value == 2) {
            this.HideDataBindingMsg = true;
            this.HideEventBinding_TwoWayTag = true;
            this.HideEventBindingTag = true;
            this.HideInterpollationTag = true;
            this.HidePropertyBindingTag = false;

        }
        else if (value == 3) {
            this.HideDataBindingMsg = true;
            this.HideEventBinding_TwoWayTag = true;
            this.HidePropertyBindingTag = true;
            this.HideInterpollationTag = true;
            this.HideEventBindingTag = false;

        }
        else
        {
            this.HideDataBindingMsg = true;
            this.HideEventBindingTag = true;
            this.HidePropertyBindingTag = true;
            this.HideInterpollationTag = true;
            this.HideEventBinding_TwoWayTag = false;

        }
    }

}