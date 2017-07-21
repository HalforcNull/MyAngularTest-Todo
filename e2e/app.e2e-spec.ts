import { MyAngularTestTodoPage } from './app.po';

describe('my-angular-test-todo App', () => {
  let page: MyAngularTestTodoPage;

  beforeEach(() => {
    page = new MyAngularTestTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
