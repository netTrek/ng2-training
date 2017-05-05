import { Audi2Page } from './app.po';

describe('audi2 App', () => {
  let page: Audi2Page;

  beforeEach(() => {
    page = new Audi2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
