import { Injectable } from '@angular/core';
import {User} from "../model/user.models";
import {Subject} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class UsersService {


	public userList: User[] = [];

	userSub =  new Subject<User[]>();

	emitUser(): void{
		this.userSub.next(this.userList);
	}

	constructor() { }

	addUser(user: User): void {
		this.userList.push(user);
		this.emitUser();
	}
}
