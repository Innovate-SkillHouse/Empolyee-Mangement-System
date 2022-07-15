import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { EmployeeURLConstants } from "src/app/shared/constants/url-constant";

@Injectable({
    providedIn:"root"
})
export class EmployeeService {
    private _EmpaddForm = FormGroup;
    public get EmpaddForm() {
        return this._EmpaddForm;
    }
    public set EmpaddForm(value) {
        this._EmpaddForm = value;
    }
    constructor(private http:HttpClient){

    }
    getAllEmployee(){
        debugger

        return this.http.get<any>(EmployeeURLConstants.GETALL)
    }
    saveEmployee(empaddmodel:any){
        debugger
        return this.http.post(EmployeeURLConstants.SAVEEMP,empaddmodel)
    }
    deleteEmployeeById(id:number){
        return this.http.delete<any>(EmployeeURLConstants.DELETE,{params:{'employeeId':id}})
    }
    getEmployeeById(id:number){
        return this.http.get<any>(EmployeeURLConstants.GET,{params:{'employeeid':id}})
    }
    updateEmployee(employee:any){
        return this.http.put<any>(EmployeeURLConstants.UPDATE,employee);
    }
}