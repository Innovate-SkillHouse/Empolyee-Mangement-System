import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;
export class LoginURLConstants {
    static LOGIN = apiUrl + '/user/Login';
}
export class USERURLConstants {
    static GETALL = apiUrl + '/user/GetAllUser';
}
export class EmpolyeeURLConstants {
    static GETALL = apiUrl + '/Empolyee/GetAllEmployee';
    static DELETE=apiUrl+'/Empolyee';  
    static GETBYID=apiUrl+'/Empolyee';
    static SAVEEMP=apiUrl+'/Empolyee';
    static UPDATEEMP=apiUrl+'/Empolyee';
}
export class CompanyURLConstants
{
    static GETALL=apiUrl+'/Company/GetAllCompanies';
    static SAVECMP=apiUrl+'/Company';
    static GETBYID=apiUrl+'/Company';
    static DELETE=apiUrl+'/Company';
    static UPDATECMP=apiUrl+'/Company';
}

export class ProjectURLConstants
{
    static UPDATEPRJ=apiUrl +'/Project/UpdateProject';
    static GETALL=apiUrl +'/Project/GetAllProjects';
    static SAVEPRG=apiUrl+'/Project/SaveProject';
    static GETBYID=apiUrl +'/Project/GetProject';
    static DELETE=apiUrl +'/Project/DeleteProject';
}