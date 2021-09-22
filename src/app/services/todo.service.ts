import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Todo} from "../model/todo.models";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TodoService {

	todoOne: string = "Projet 1";
	todoTwo: string = "Projet 2";
	todoThree: string = "Projet 3";
	todoFour: string = "Projet 4";

	maDate = new Date().getFullYear();
	todos: Todo[] = [];
	todosSubject = new Subject<any[]>();

	/*   raccourcie1: any;
	   raccourcie2: any;*/

	constructor(private httpClient: HttpClient) {

		this.getTodoFromSever();

		/*this.todos = new Promise((resolve, rejects) => {
			const data =[
				{
					todoName: "Projet 1",
					todoStatus: true,
					todoImage: "https://placeimg.com/300/300/tech",
					isModif:  false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				},
				{
					todoName: "Projet 2",
					todoStatus: false,
					todoImage: "https://placeimg.com/300/300/nature",
					isModif:  false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"

				},
				{
					todoName: "Projet 3",
					todoStatus: true,
					todoImage: "https://placeimg.com/300/300/grayscal",
					isModif:  false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				},
				{
					todoName: "Projet 4",
					todoStatus: false,
					todoImage: "https://placeimg.com/300/300/animal",
					isModif:  false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				},
				{
					todoName: "Projet 5",
					todoStatus: true,
					todoImage: "https://placeimg.com/300/300/tech",
					isModif:  false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				},
				{
					todoName: "Projet 6",
					todoStatus: false,
					todoImage: "https://placeimg.com/300/300/nature",
					isModif:  false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"

				},
				{
					todoName: "Projet 7",
					todoStatus: true,
					todoImage: "https://placeimg.com/300/300/grayscal",
					isModif:  false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				},
				{
					todoName: "Projet 8",
					todoStatus: false,
					todoImage: "https://placeimg.com/300/300/animal",
					isModif:  false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				}
			];
			if(data.length){
				setTimeout(()=>{
					this.todos = data;
					resolve(data)
				},6000);
			}
			else{
				rejects("Pas de données disponible sur le serveur");
			}
		});*/

		/*setTimeout(() => {
			this.todos = [
				{
					todoName: "Projet 1",
					todoStatus: true,
					todoImage: "https://placeimg.com/300/300/tech",
					isModif: false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				},
				{
					todoName: "Projet 2",
					todoStatus: false,
					todoImage: "https://placeimg.com/300/300/nature",
					isModif: false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"

				},
				{
					todoName: "Projet 3",
					todoStatus: true,
					todoImage: "https://placeimg.com/300/300/grayscal",
					isModif: false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				},
				{
					todoName: "Projet 4",
					todoStatus: false,
					todoImage: "https://placeimg.com/300/300/animal",
					isModif: false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				},
				{
					todoName: "Projet 5",
					todoStatus: true,
					todoImage: "https://placeimg.com/300/300/tech",
					isModif: false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				},
				{
					todoName: "Projet 6",
					todoStatus: false,
					todoImage: "https://placeimg.com/300/300/nature",
					isModif: false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"

				},
				{
					todoName: "Projet 7",
					todoStatus: true,
					todoImage: "https://placeimg.com/300/300/grayscal",
					isModif: false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				},
				{
					todoName: "Projet 8",
					todoStatus: false,
					todoImage: "https://placeimg.com/300/300/animal",
					isModif: false,
					description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq"
				}
			];
			this.emitTodos();
		}, 3000)

		/*this.raccourcie1 = Promise.resolve(new Date());
this.raccourcie1 = Promise.reject("Pas de données sur le serveur");*/
	}

	onChangeStatus(i: number) {
		this.todos[i].todoStatus = !this.todos[i].todoStatus;
		this.emitTodos();
		this.saveTodoToServer();

	}

	onChangeIsModif(i: number) {
		this.todos[i].isModif = !this.todos[i].isModif;
		this.emitTodos();
		this.saveTodoToServer();
	}

	getToDo(index: number): any {
		if (this.todos[index])
			return this.todos[index]
		else
			return;
	}

	emitTodos() {
		this.todosSubject.next(this.todos);
	}

	addTodo(todo: Todo): void {
		//unshift equivaut a push mais cette fois au debut du tableau
		this.todos.unshift(todo);
		//this.todosSubject.next(this.todos);
		this.emitTodos();
		this.saveTodoToServer();
	}

	saveTodoToServer(): void{
		this.httpClient.put("https://todo-list-app-9614c-default-rtdb.firebaseio.com/todo.json", this.todos)
			.subscribe(() => {
				console.log("Données enregistré avec succée");
			},
			(error) => {
				console.log("Erreur de sauvegarde: "+error);
			});
	}

	getTodoFromSever(): void{
		this.httpClient.get<Todo[]>("https://todo-list-app-9614c-default-rtdb.firebaseio.com/todo.json")
			.subscribe((todoRecup)=>{
				this.todos = todoRecup;
				this.emitTodos();
			},
			(error)=>{
				console.log("Erreur de recupration des donné "+ error);
			},
			()=>{
				console.log("Recupration des donné términée ");
			});
	}
}
