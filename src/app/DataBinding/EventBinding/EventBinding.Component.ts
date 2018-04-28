import { Component } from '@angular/core'
@Component({
    selector: 'EventBinding',
    templateUrl:'./EventBinding.Component.html'

})
export class EventBindingComponent {
    inputName: string="Ashish";
    public ChangeText(input: any) {
        this.inputName = input;
    }
}