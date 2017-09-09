import { Component, OnInit } from '@angular/core';
import {TodoComponent} from "../todo.component";

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  constructor(public par: TodoComponent) { }

  ngOnInit() {
  }

}
