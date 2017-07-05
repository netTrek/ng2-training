import { TestProPage } from './app.po';

describe('test-pro App', () => {
  let page: TestProPage;

  beforeEach(() => {
    page = new TestProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
