import { TestBed, inject, async } from '@angular/core/testing';
import { HttpBackend, HttpClientModule } from '@angular/common/http';

import { TodoService } from './todo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TodoService', () => {
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService],
    });

    httpCtrl = TestBed.get(HttpBackend);
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  /*
  it('should return a list', async(inject([TodoService], (service: TodoService) => {
    service.getList().subscribe(todos => {
      expect(todos.length).toBe(2);
    });
  })));
  */

  it('should return a list with mock', inject([TodoService], (service: TodoService) => {
    service.getList().subscribe(todos => {
      expect(todos.length).toBe(1);
      expect(todos[0].text).toBe('Fake Todo');
    });

    const todoRequest = httpCtrl.expectOne('/assets/todos.json');
    todoRequest.flush([{text: 'Fake Todo'}]);
  }));


});
