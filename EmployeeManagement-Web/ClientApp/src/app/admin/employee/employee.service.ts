import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmployeeURLConstants } from "src/app/shared/constants/url-constant";

@Injectable({
    providedIn:"root"
})
export class EmployeeService {
    constructor(private http:HttpClient){

    }
    getAllEmployee(){
        debugger

        return this.http.get(EmployeeURLConstants.GETALL)
    }
}