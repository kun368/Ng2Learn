import { Component, OnInit } from '@angular/core';
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  desc = '';

  constructor(private service: TodoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let filter = params['filter'];
      this.service
        .filterTodos(filter)
        .then(todos => {
          this.todos = [...todos];
        })
    });
  }

  addTodo() {
    this.service
      .addTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
        this.desc = '';
      })
  }

  toggleTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.service
      .toggleTodo(todo)
      .then(t => {
        this.todos = [...this.todos.slice(0, i), t, ...this.todos.slice(i+1)];
      });
  }

  removeTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.service
      .deleteTodoById(todo.id)
      .then(t => {
        this.todos = [...this.todos.slice(0, i), ...this.todos.slice(i+1)];
      });
  }

  getTodos(): void {
    this.service
      .filterTodos()
      .then(todos => {
        this.todos = [...todos];
      });
  }

  removeCompletedTodos() {
    const arr: Promise<Todo>[] = [];
    for (let obj of this.todos) {
      if (obj.completed)
        arr.push(this.service.deleteTodoById(obj.id))
    }
    Promise.all(arr).then(t => {
      this.getTodos();
    });
  }



}
