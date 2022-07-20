import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERURLConstants } from '../shared/constants/url-constant';
@Injectable({
    providedIn: 'root'
  })
  export class SignupService {
    constructor(private http:HttpClient) {
    }
        saveUser(useraddmodel:any){
            debugger
            return this.http.post<any>(USERURLConstants.SAVEUSER,useraddmodel)
          }
    }
