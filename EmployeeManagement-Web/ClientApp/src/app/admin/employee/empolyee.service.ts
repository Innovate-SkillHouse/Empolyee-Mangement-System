import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmpolyeeURLConstants } from "src/app/shared/constants/url-constant";

@Injectable({
    providedIn:'root'
})

 export class EmpolyeeService {
    constructor(private http:HttpClient) {
    }

    getAllEmploye(){
        debugger
        return this.http.get<any>(EmpolyeeURLConstants.GETALL)
    }
    
    deleteEmpolyeeById(id:number){
        return this.http.delete<any>(EmpolyeeURLConstants.DELETE,{params:{'employeeId':id}})
    }
    saveEmployee(empaddmodel:any){
        return this.http.post<any>(EmpolyeeURLConstants.SAVEEMP,empaddmodel)
      }
    getEmpolyeeById(id:number)
    {
        return this.http.get<any>(EmpolyeeURLConstants.GETBYID,{params:{'employeeId':id}})
    }

    updateEmpolyee(empolyee:any)
    {
        return this.http.put<any>(EmpolyeeURLConstants.UPDATEEMP,empolyee)
    }

 }
