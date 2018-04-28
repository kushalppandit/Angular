import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({

    selector: 'child',
    templateUrl:'./Child.Component.html',
    inputs:['ParentData']
})

export class ChildComponent{

    @Input() ParentData: string;
    @Output() ChildEvent = new EventEmitter<string>();
    OnChange(value:string){
    this.ChildEvent.emit(value);
    }
}