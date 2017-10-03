import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  template: `
    <todo-item
      *ngFor="let todo of todos"
      [todo]="todo"></todo-item>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  @Input()
  public todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
