import {Directive,ElementRef, HostListener,Input} from '@angular/core';

@Directive({
    selector: '[OnHover]'
})
export class OnHoverBackgroundColorChangeDirecitve{
    @Input() OnHover:string;
    public xyz:boolean;
    constructor(private el:ElementRef){}
    @HostListener('mouseleave') onmouseleave(){

        this.highliteColor('white');

}
    @HostListener('mouseenter') onmouseenter(){

        this.highliteColor(this.OnHover);
    }
    highliteColor(color:any){
       this.el.nativeElement.style.backgroundColor=color;
       console.log(this.el.nativeElement.style.backgroundColor);
    }
}