import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpolyeeURLConstants } from 'src/app/shared/constants/url-constant';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  constructor(private http:HttpClient) {

   }
   
   getAllEmployee(){
   
    return this.http.get<any>(EmpolyeeURLConstants.GETALL)
   }
  saveEmployee(empaddmodel:any){
    return this.http.post<any>(EmpolyeeURLConstants.SAVEEMP,empaddmodel)
  }
  DeeleteEmployee(empdelmodel:any){
   // return this.http.delete<any>(EmpolyeeURLConstants.DELETEEMP,empdelmodel)
  }
}
