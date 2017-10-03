import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-root',
  template: `
    <h1>TodoList</h1>
    <todo-form (onNewTodo)="insertTodo($event)"></todo-form>
    <todo-list [todos]="todos"></todo-list>
  `,
  styles: []
})
export class AppComponent {
  public todos: Todo[] = [];

  insertTodo(todo) {
    this.todos.push(todo);
  }
}
