import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyURLConstants } from 'src/app/shared/constants/url-constant';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) {

   }
   GetAllCompany(){
    debugger
    return this.http.get<any>(CompanyURLConstants.GETALL)
} 
saveCompany(comaddmodel:any){
  debugger
  return this.http.post<any>(CompanyURLConstants.SAVECMP,comaddmodel)
}
getCompanyById(companyId:number)
{
    return this.http.get<any>(CompanyURLConstants.GETBYID,{params:{'companyId':companyId}})
}
deleteCompany(companyId:number){
  return this.http.delete<any>(CompanyURLConstants.DELETE,{params:{'companyId':companyId}})
}
updateCompany(company:any)
{
    return this.http.put<any>(CompanyURLConstants.UPDATECMP,company)
}
}
