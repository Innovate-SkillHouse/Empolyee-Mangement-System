import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  ProjectURLConstanst } from "src/app/shared/constants/url-constant";

@Injectable({
    providedIn:'root'
})

 export class ProjectService {
    constructor(private http:HttpClient) {
    }
    getAllProjects(){
        return this.http.get<any>(ProjectURLConstanst.GETALLPROJECTS)
    }
    saveProject(projectaddmodel:any){
        return this.http.post<any>(ProjectURLConstanst.SAVEPROJECT,projectaddmodel)
      }
      getProjectById(id:number)
      {
          return this.http.get<any>(ProjectURLConstanst.GETPROJECTSBYID,{params:{'projectId':id}})
      }
    
      deleteProjectById(id:number){
        return this.http.delete<any>(ProjectURLConstanst.DELETE,{params:{'projectId':id}})
    }
}