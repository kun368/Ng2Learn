import { Injectable } from '@angular/core';
import {Todo} from "../entities";
import {UUID} from "angular2-uuid";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TodoService {

  private api_url = "http://localhost:3000/todos";
  private headers = new Headers({'Content-Type': 'application/json'});

  userId: number = 0;

  constructor(private http: Http) { }

  addTodo(todoItem: string): Promise<Todo> {
    let todo: Todo = {
      id: UUID.UUID(),
      desc: todoItem,
      completed: false,
      userId: this.currentUserId()
    };
    console.log(this.api_url);
    return this.http
      .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Todo)
      .catch(this.handleError);
  }

  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    console.log(url);
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
      .put(url, JSON.stringify(updatedTodo), {headers: this.headers})
      .toPromise()
      .then(() => updatedTodo)
      .catch(this.handleError)
  }

  deleteTodoById(id: string): Promise<Todo> {
    const url = `${this.api_url}/${id}`;
    console.log(url);
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  private getTodos(url: string): Promise<Todo[]> {
    url = `${url}&userId=${this.currentUserId()}`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Todo[])
      .catch(this.handleError)
  }

  filterTodos(filter: string = 'ALL'): Promise<Todo[]> {
    let url = '';
    switch (filter) {
      case 'ACTIVE':
        url = `${this.api_url}?completed=false`;
        break;
      case 'DONE':
        url = `${this.api_url}?completed=true`;
        break;
      default:
        url = `${this.api_url}?`;
    }
    return this.getTodos(url);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.meaning || error);
  }

  private currentUserId(): number {
    return +localStorage.getItem('userId');
  }

}
