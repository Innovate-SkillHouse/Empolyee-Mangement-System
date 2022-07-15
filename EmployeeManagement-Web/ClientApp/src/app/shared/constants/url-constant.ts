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