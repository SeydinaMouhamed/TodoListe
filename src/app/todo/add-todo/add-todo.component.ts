import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/todo.models";
import {TodoService} from "../../services/todo.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

    todoToAdd = new Todo();

    constructor(private todoService: TodoService,
                private router: Router ) { }

    ngOnInit(): void {
    }

    onSubmit() {
        this.todoService.addTodo(this.todoToAdd);
        this.router.navigate(["todo"]);
    }
}
