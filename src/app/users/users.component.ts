import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../model/user.models";
import {UsersService} from "../services/users.service";
import {Subscription} from "rxjs";


@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

	userList: User[] = [];
	userSubcription!: Subscription;

	constructor(private userService: UsersService) { }

	ngOnInit(): void {

		this.userSubcription = this.userService.userSub.subscribe(
			(userRecup: User[]) => {
				this.userList = userRecup;
			}
		);
		this.userService.emitUser();
		//this.userList = this.userService.userList;
	}

	ngOnDestroy(): void {
		this.userSubcription.unsubscribe();
	}

}
