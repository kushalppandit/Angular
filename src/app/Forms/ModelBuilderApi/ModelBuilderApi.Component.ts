import { Component, OnInit } from '@angular/core'
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
    selector: 'MDBForm',
    templateUrl:'./ModelBuilderApi.Component.html',
    styles: [`input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}`]
})
export class ModelBuilderComponent implements OnInit {
    constructor(private frmBuilder: FormBuilder) { }
    userForm: FormGroup;
    ngOnInit() {
        this.userForm = this.frmBuilder.group({
            name: ['Raj', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
            email: [],
            address: this.frmBuilder.group({
                street: [],
                city: [],
                postalcode: [null, Validators.pattern('^[1-9][0-9]{4}$')]
            })
        })
    }
    OnSubmit(value: any) {
        console.log(value.name);
    }
    
}