import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {User} from "../../model/user.models";
import {Address} from "../../model/address.models";

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

	addUserForm!: FormGroup;

	constructor(private formBuilder: FormBuilder,
				private userService: UsersService,
				private router: Router) { }

	ngOnInit(): void {
		this.initUserForm();
	}

	private initUserForm() {
		this.addUserForm = this.formBuilder.group({
			firtName: this.formBuilder.control("", [ Validators.required, Validators.minLength(5)]),
			lastName: this.formBuilder.control("", [ Validators.required, Validators.minLength(5)]),
			email: this.formBuilder.control("", [ Validators.required, Validators.email ,Validators.minLength(5)]),
			description: this.formBuilder.control("", [ Validators.required, Validators.minLength(15)]),
			dateBirth: this.formBuilder.control("" , Validators.required),
			address: this.formBuilder.group({
				street: this.formBuilder.control("", Validators.required),
				city: this.formBuilder.control("", Validators.required),
				state: this.formBuilder.control("", Validators.required),
				zip: this.formBuilder.control("", Validators.required),
			}),
			aliases: this.formBuilder.array([]),
		});
	}

	getAliases(): FormArray{
		return this.addUserForm.get("aliases") as FormArray;
	}

	addAliases(){
		this.getAliases().push(this.formBuilder.control("", Validators.required));
	}

	onSubmit():void{
		const dataUser = this.addUserForm.value;

		const address  = new Address(
			dataUser.address.street,
			dataUser.address.city,
			dataUser.address.state,
			dataUser.address.zip
		);

		const alias = dataUser.aliases ? dataUser.aliases : [];

		const newUser = new User(
			dataUser.firtName,
			dataUser.lastName,
			dataUser.email,
			address,
			dataUser.description,
			dataUser.dateBirth,
			alias
		);

		this.userService.addUser(newUser);
		this.router.navigate(["/user"]);
	}
}
