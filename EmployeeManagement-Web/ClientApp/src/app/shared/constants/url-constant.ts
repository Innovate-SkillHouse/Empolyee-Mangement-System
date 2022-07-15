import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;
export class LoginURLConstants {
    static LOGIN = apiUrl + '/user/Login';
}
export class USERURLConstants {
    static GETALL = apiUrl + '/user/GetAllUser';
}
export class EmployeeURLConstants{
    static GETALL = apiUrl +'/Employee/GetAllEmployee'
    static SAVEEMP=apiUrl+'/Employee'
    static DELETE=apiUrl+'/Employee';
    static GET=apiUrl+'/Employee';
    static UPDATE=apiUrl+'/Employee';

}
