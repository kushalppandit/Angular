import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'MDforms',
    templateUrl: './ModelDrivenForm.Component.html',
    styles: [`input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}`]
})
export class MDFormComponent {

    students = [
    {name: 'Rakesh', age: '23'},
    {name: 'Satish', age: '23'},
    {name: 'Ashish', age: '23'},
    {name: 'Vishal', age: '23'},
    {name: 'Shubham', age: '23'},
  ];

    userForm = new FormGroup({
        name: new FormControl('Raj', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
        email: new FormControl(),

         select : new FormGroup({
         student: new FormControl(null,Validators.required),
           }),
         
        studradio:new FormGroup({
          selectedstud: new FormControl(null,Validators.required)
        }),


        address: new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
        })
    })

    OnSubmit() {
        console.log(this.userForm.value);
    }

}