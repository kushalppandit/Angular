import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {routingComponents} from './app.routing.module';
import {HttpModule} from '@angular/http';
import {BackgroundChangeDirecitve} from './CustomDirectives/BackgroundStyleChange.Directive';
import {StructuralDirective} from './CustomDirectives/HideStructuralDirective';
import {OnHoverBackgroundColorChangeDirecitve} from './CustomDirectives/OnHoverBackgroundColorChange.Directive'
// import { ChildRoutingModule, childroutingComponents } from './child.routing.moudule'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BackgroundChangeDirecitve,
    StructuralDirective,
    // childroutingComponents,
    OnHoverBackgroundColorChangeDirecitve
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
