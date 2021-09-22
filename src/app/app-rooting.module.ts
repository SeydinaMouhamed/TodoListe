import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TodoComponent} from "./todo/todo.component";
import {UsersComponent} from "./users/users.component";
import {AddTodoComponent} from "./todo/add-todo/add-todo.component";
import {AddUserComponent} from "./users/add-user/add-user.component";
import {FotFoundComponent} from "./fot-found/fot-found.component";
import {ContactComponent} from "./contact/contact.component";
import {SingleTodoComponent} from "./single-todo/single-todo.component";


const ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'todo', component: TodoComponent},
	{path: 'user', component: UsersComponent},
	{path: 'add-todo', component: AddTodoComponent},
	{path: 'add-user', component: AddUserComponent},
	{path: 'fot-found', component: FotFoundComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'single-todo/:id', component: SingleTodoComponent},
	{path: '**', pathMatch: 'full', redirectTo: 'fot-found'}
]


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot(ROUTES),
	],
	exports: [RouterModule]
})
export class AppRootingModule { }
