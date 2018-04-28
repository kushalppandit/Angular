import { Component } from '@angular/core'
@Component({
    selector: 'classStyle',
    templateUrl:'./ClassAndStyle.Component.html',
    styleUrls: ['./ClassAndStyle.Component.css']
})
export class ClassAndStyleComponent {
    ApplyClass:boolean=false;
    Message1:string;
    Message2:string;
    Message3:string;
    Message4:string;
    setClasses:boolean=false;
    setStyles:boolean=false;
    Class1:boolean=false;
    Class2:boolean=false;
    ChangeBack:boolean=false;
    hideDiv1:boolean=false;
    hideDiv2:boolean=false;
    hideDiv3:boolean=false;
    hideDiv4:boolean=false;
    // hideSingleCSDiv:boolean=true;
    // hideMultipleCSDiv:boolean=true;
//     ClassBindingSingleClass(input:any){
//         this.hideMultipleCSDiv=true;
//         this.ChangeBack=false;
//         this.hideSingleCSDiv=false;
//         this.ApplyClass=true;
//         this.Message="ApplyClass { background: Pink; color: Red; }";
//     }
//     StyleBindingSingleStyle(input:any){
//        this.hideMultipleCSDiv=true;
//        this.ApplyClass=false;
//        this.hideSingleCSDiv=false;
//        this.ChangeBack=true;
//        this.Message="Background Colour is changed to Yellow";
//     }
//     ClassBindingMultipleClass(input:any){
//         this.hideSingleCSDiv=true;
//         this.hideMultipleCSDiv=false;
//         this.setClasses=true;
//         this.Message="Class1{ background: Green; } and Class2{ color: Yellow; }"
        
//     }
//    setClassesFunc(){
//           let classes =  {
//           Class1:this.setClasses,
//           Class2:this.setClasses
//         };
//         return classes;
//    }
//     setStylesFunc(){
//         let styles = {
//             'font-style':  this.setStyles ? 'italic' : 'normal',
//             'font-weight': this.setStyles ? 'bold'   : 'normal', 
//              };
//         return styles;
//     }
//     StyleBindingMultipleStyle(input:any){
//         this.hideSingleCSDiv=true;
//         this.hideMultipleCSDiv=false;
//         this.setStyles=true;
          
//     }



// ClassBindingSingleClass(input:any){
//         this.ChangeBack=false;
//         this.setClasses=false;
//         this.setStyles=false;
//         this.ApplyClass=true;
//         this.Message="NewClass{ background: Pink; color: Red; }";
//     }
//     StyleBindingSingleStyle(input:any){
//        this.setClasses=false;
//        this.setStyles=false;
//        this.ApplyClass=false;
//        this.ChangeBack=true;
//        this.Message="Background Colour is changed to Yellow";
//     }
//     ClassBindingMultipleClass(input:any){
//         this.setStyles=false;
//         this.ApplyClass=false;
//         this.ChangeBack=false;
//         this.setClasses=true;
//         this.Message="Class1{ background: Green; } and Class2{ color: Yellow; }"
        
//     }
//    setClassesFunc(){
//           let classes =  {
//           Class1:this.setClasses,
//           Class2:this.setClasses
//         };
//         return classes;
//    }
//     setStylesFunc(){
//         let styles = {
//             'font-style':  this.setStyles ? 'italic' : 'normal',
//             'font-weight': this.setStyles ? 'bold'   : 'normal', 
//              };
//         return styles;
//     }
//     StyleBindingMultipleStyle(input:any){
//         this.ApplyClass=false;
//         this.ChangeBack=false;
//         this.setClasses=false;
//         this.setStyles=true;
//         this.Message="(font-style : italic)  (font-weight:bold)"
//     }



ClassBindingSingleClass(input:any){
        this.Message1="";
        this.Message2="";
        this.Message4="";
        this.setStyles=false;
        this.setClasses=false;
        this.ChangeBack=false;
        this.ApplyClass=true;
        this.Message3="NewClass{ background: Pink; color: Red; }";
    }
    StyleBindingSingleStyle(input:any){
        this.Message1="";
        this.Message2="";
        this.Message3="";
       this.setStyles=false;
       this.setClasses=false;
       this.ApplyClass=false;
       this.ChangeBack=true;
       this.Message4="Background Colour is changed to Yellow";
    }
    ClassBindingMultipleClass(input:any){
        this.Message3="";
        this.Message2="";
        this.Message4="";
    this.setStyles=false;
       this.ApplyClass=false;
       this.ChangeBack=false;
        this.setClasses=true;
        this.Message1="Class1{ background: Green; } and Class2{ color: Yellow; }"
        
    }
   setClassesFunc(){
          let classes =  {
          Class1:this.setClasses,
          Class2:this.setClasses
        };
        return classes;
   }
    setStylesFunc(){
        let styles = {
            'font-style':  this.setStyles ? 'italic' : 'normal',
            'font-weight': this.setStyles ? 'bold'   : 'normal', 
            'color':this.setStyles? 'orange' : 'black'
             };
        return styles;
    }
    StyleBindingMultipleStyle(input:any){
        this.Message1="";
        this.Message3="";
        this.Message4="";
       this.setClasses=false;
       this.ApplyClass=false;
       this.ChangeBack=false;
        this.setStyles=true;
        this.Message2="(font-style : italic) (font-weight:bold) (color:Orange)"
    }


}