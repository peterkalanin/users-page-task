import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from "rxjs/operators";
import { UserList } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getUsers(page: number = 1): Observable<UserList> {
        const url = `https://reqres.in/api/users`;
        const obs$ = this.http.get<UserList>(url).pipe(share());

        return obs$;
    }
}