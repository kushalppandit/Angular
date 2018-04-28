import{Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService{
   private url:string="assets/EmployeeData.json"
    constructor(private _http:Http){}
    getEmployees(){
         return this._http.get(this.url).map((response:Response)=>response.json());
    }
}