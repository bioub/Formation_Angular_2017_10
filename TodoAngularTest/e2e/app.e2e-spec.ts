import { AppPage } from './app.po';

describe('todo-angular-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getH1Text()).toEqual('TodoList');
  });

  it('should add todo', () => {
    page.navigateTo();
    expect(page.getTodos().count()).toBe(2); // 2 du serveur
    page.insertTodo('Todo A');
    page.insertTodo('Todo B');
    expect(page.getTodos().count()).toBe(4);
    expect(page.getTodos().first().getText()).toEqual('Todo B');
  });
});
