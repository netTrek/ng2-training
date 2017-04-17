import { GfkUpdatePage } from './app.po';

describe('gfk-update App', () => {
  let page: GfkUpdatePage;

  beforeEach(() => {
    page = new GfkUpdatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gfk works!');
  });
});
