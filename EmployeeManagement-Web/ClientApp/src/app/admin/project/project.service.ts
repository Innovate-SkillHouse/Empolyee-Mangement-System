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
      getProjectById(id:number)
    {
          return this.http.get<any>(ProjectURLConstants.GETBYID,{params:{'projectId':id}})
    }
    updateProject(project:any)
    {
          return this.http.put<any>(ProjectURLConstants.UPDATEPRJ,project)
      }
      deleteProjectById(id:number){
        return this.http.delete<any>(ProjectURLConstants.DELETE,{params:{'projectId':id}})
    }
}
