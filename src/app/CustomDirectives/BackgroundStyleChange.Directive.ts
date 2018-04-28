import {Directive,ElementRef, HostListener,Input} from '@angular/core';

@Directive({
    selector: '[BackgroundChange]'
})
export class BackgroundChangeDirecitve{
    @Input() BackgroundChange:string;
    public xyz:boolean;
    constructor(private el:ElementRef)
    {
        el.nativeElement.style.backgroundColor=this.BackgroundChange;
        // var x=el.nativeElement.value;
        //  this.xyz =el.nativeElement.checked;
        // console.log(x);
        // console.log(this.xyz);
        // this.highliteColor(this.BackgroundChange);
    }

//     @HostListener('mouseleave') onmouseleave(){

//         this.highliteColor('white');

// }
//     @HostListener('mouseenter') onmouseenter(){

//         this.highliteColor(this.BackgroundChange);
//     }
    highliteColor(color:any){
       this.el.nativeElement.style.backgroundColor=color;
       console.log(color);
    }
}