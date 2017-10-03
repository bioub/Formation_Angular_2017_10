import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-item',
  template: `
    <p>
      {{todo.text}}
    </p>
  `,
  styles: []
})
export class ItemComponent implements OnInit {

  @Input()
  public todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
