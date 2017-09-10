import {Component, Input, OnInit} from '@angular/core';
import {TodoComponent} from "../todo.component";
import {Todo} from "../../entities";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  curTodo: Todo;

  constructor(public par: TodoComponent) { }

  ngOnInit() {
  }

}
