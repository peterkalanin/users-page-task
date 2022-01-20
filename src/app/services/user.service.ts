import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, share } from "rxjs/operators";
import { User, UserList } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    private _users$: BehaviorSubject<User[] | undefined> = new BehaviorSubject<User[] | undefined>(undefined);

    constructor(private http: HttpClient) { }

    getUsers(page: number = 1): Observable<UserList> {
        const url = `https://reqres.in/api/users`;
        const obs$ = this.http.get<UserList>(url).pipe(share());

        return obs$;
    }

    get users$() {
        if (this._users$.getValue() != undefined) {
            return this._users$;
        }
        return this.getUsers()
            .pipe(
                map(resp => {
                    return resp.data
                })
            );
    }
}