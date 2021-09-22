import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit, OnDestroy {

    todos: any;
    maDate: any;
    todosSub!: Subscription;

    constructor(private todoService: TodoService,
				private router: Router) {

    }

    ngOnInit(): void {

        this.todosSub = this.todoService.todosSubject.subscribe(
            (todoData: any[] ) => {
                this.todos = todoData;
            },
            (error) => {
                console.log("Erreur: "+error)
            },
            () => {
                console.log("Observable Complet")
            },
        );

        this.todoService.emitTodos();

        this.maDate = this.todoService.maDate;
    }

    onChangeStatus(i: number) {
        this.todoService.onChangeStatus(i);
    }

    onChangeIsModif(i: number) {
        this.todoService.onChangeIsModif(i);
    }

    voirSigleTodo(id: number) {
        this.router.navigate(["single-todo", id]);
    }

    ngOnDestroy(): void {
        this.todosSub.unsubscribe();
    }
}
