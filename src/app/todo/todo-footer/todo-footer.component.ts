import {Component, OnInit} from '@angular/core';
import {TodoComponent} from "../todo.component";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {

  constructor(public par: TodoComponent) {

  }

  ngOnInit() {
  }

}
