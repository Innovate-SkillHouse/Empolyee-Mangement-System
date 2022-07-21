import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProjectURLConstants } from "src/app/shared/constants/url-constant";

@Injectable({
    providedIn:'root'
})

 export class ProjectService {
    constructor(private http:HttpClient) {
    }
    getAllProjects(){
        debugger
        return this.http.get<any>(ProjectURLConstants.GETALL)
    }
    saveProject(projectaddmodel:any){
        return this.http.post<any>(ProjectURLConstants.SAVEPRG,projectaddmodel)
      }
    deleteProjectById(projectId:number){
        debugger
        return this.http.delete<any>(ProjectURLConstants.DELETE,{params:{'projectId':projectId}})
    }
    getProjectById(projectId:number)
    {
        return this.http.get<any>(ProjectURLConstants.GETBYID,{params:{'projectId':projectId}})
    }
    updateProject(project:any)
    {
        return this.http.put<any>(ProjectURLConstants.UPDATEPRG,project)
    }
}