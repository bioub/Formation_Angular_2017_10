import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getH1Text() {
    return element(by.css('todo-root h1')).getText();
  }

  insertTodo(value) {
    element(by.tagName('input')).sendKeys(value);
    element(by.tagName('form')).submit();
    element(by.tagName('input')).clear();
  }

  getTodos() {
    return element.all(by.css('todo-item'));
  }
}
