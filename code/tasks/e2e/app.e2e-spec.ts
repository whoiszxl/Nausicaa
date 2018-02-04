import { TasksPage } from './app.po';

describe('tasks App', () => {
  let page: TasksPage;

  beforeEach(() => {
    page = new TasksPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
