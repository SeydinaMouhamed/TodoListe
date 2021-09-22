import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../services/todo.service";

@Component({
    selector: 'app-single-todo',
    templateUrl: './single-todo.component.html',
    styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {

    constructor(private route: ActivatedRoute, private todoService: TodoService,) { }

    todo: any;
    error: any;

    ngOnInit(): void {

        // + devant l'instruction pour caster en type int
        const id = +this.route.snapshot.params['id'];
        this.todo = this.todoService.getToDo(id);
        if(!this.todo){
            this.error = "Aucun todo correspondant a cet ID";
        }
    }

}
