import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    getCustomer(headers) {
        return this.http.get(`https://broker.ephoenix.ir/api/v1/Customer`,{
            headers: headers
        });
    }

    loginUser(body) {
        return this.http
            .post('http://144.91.74.206:8080/api/authenticate',body)

    }

    editCustomer(body,headers) {
        return this.http
            .put('https://broker.ephoenix.ir/api/v1/Customer/edit',body,{
                headers: headers
            })
            .pipe();
    }

}
