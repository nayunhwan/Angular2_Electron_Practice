import { Practice03Page } from './app.po';

describe('practice03 App', () => {
  let page: Practice03Page;

  beforeEach(() => {
    page = new Practice03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
