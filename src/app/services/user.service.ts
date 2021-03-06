import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, share } from "rxjs/operators";
import { Pagination } from '../models/pagination.model';
import { User, UserList } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    private _users$: BehaviorSubject<User[] | undefined> = new BehaviorSubject<User[] | undefined>(undefined);
    pagination: Pagination = {};

    constructor(private http: HttpClient) { }

    getUsers(page?: number, delay?: number): Observable<UserList> {
        // const url = `https://reqres.in/api/users${delay ? '?delay=' + delay : ''}`;
        const url = `https://reqres.in/api/users`;
        const params: any = {};
        if (page) { params.page = page }
        if (delay) { params.delay = delay }
        const obs$ = this.http.get<UserList>(url, {
            params: params
        }).pipe(share());

        obs$.subscribe((resp) => {
            this._users$.next(resp.data);
            this.pagination = {
                page: resp.page
            }
        })

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