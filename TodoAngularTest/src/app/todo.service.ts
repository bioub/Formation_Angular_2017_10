import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  constructor(
    protected http: HttpClient,
  ) { }

  getList(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/assets/todos.json');
  }
}
