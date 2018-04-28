import { Component } from '@angular/core'
@Component({
    selector: 'CustDir',
    templateUrl:'./CustomDirective.Component.html'

})
export class CustomDirective {
 
    public changeBackground:boolean=false;
    public hideElement:boolean=false;
    public changeback:boolean=false;
    public color:string;

    OnClick(){
       this.hideElement=! this.hideElement;
    }
    ToChangeBack(){
       this.changeback=! this.changeback;
       if(this.changeback){
          this.color="green";
       }
       else{
         this.color="white";
      }
    }
}