import { Component, OnInit } from '@angular/core';
import {TodoComponent} from "../todo.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public par: TodoComponent) { }

  ngOnInit() {
  }

}
