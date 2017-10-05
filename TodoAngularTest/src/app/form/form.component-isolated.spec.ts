import { FormComponent } from './form.component';

describe('FormComponent Isolated', () => {

  it('should emit a todo when submitted', (done) => {
    const formComp = new FormComponent();
    formComp.todo.text = 'Todo Item';

    formComp.onNewTodo.subscribe((emittedTodo) => {
      expect(emittedTodo.text).toBe(formComp.todo.text);
      expect(emittedTodo === formComp.todo).toBeFalsy();
      done();
    });

    formComp.submit();

  });

});
