import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(
    protected todoService: TodoService,
  ) {}

  ngOnInit(): void {
    this.todoService.getList()
      .subscribe(todos => this.todos = todos);
  }

  insertTodo(todo) {
    this.todos.unshift(todo);
  }
}
