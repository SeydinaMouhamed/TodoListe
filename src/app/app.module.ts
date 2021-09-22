import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { FotFoundComponent } from './fot-found/fot-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes} from "@angular/router";
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { HttpClientModule} from "@angular/common/http";
import { AppRootingModule } from './app-rooting.module';
import {TodoService} from "./services/todo.service";


@NgModule({
	declarations: [
		AppComponent,
		TodoComponent,
		HeaderComponent,
		HomeComponent,
		FotFoundComponent,
		SingleTodoComponent,
		ContactComponent,
		AddTodoComponent,
		UsersComponent,
		AddUserComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
 	 	AppRootingModule,
	],
	providers: [TodoService],
	bootstrap: [AppComponent]
})
export class AppModule {

}
