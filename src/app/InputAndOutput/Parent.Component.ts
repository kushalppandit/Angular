import {Component} from '@angular/core';
import {ChildComponent} from './Child.Component'

@Component({

    selector: 'parent',
    templateUrl:'./Parent.Component.html',
    styleUrls: ["./Parent.Component.css"]
})

export class ParentComponent{    
public ChildData: string;

public test:string="kushal";

}