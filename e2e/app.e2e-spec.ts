import { DomAppPage } from './app.po';

describe('pr-gui App', () => {
  let page: DomAppPage;

  beforeEach(() => {
    page = new DomAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
