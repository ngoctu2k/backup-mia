import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(private _http: HttpClient) { }

    public login(username: string, pwd: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };

        return this._http.post<any>('Token',
            'grant_type=password&username=' + username + '&password=' + pwd,
            httpOptions);
    }
}