import { GiphyAppPage } from './app.po';

describe('giphy-app App', () => {
  let page: GiphyAppPage;

  beforeEach(() => {
    page = new GiphyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
