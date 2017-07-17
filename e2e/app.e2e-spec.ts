import { CliProPage } from './app.po';

describe('cli-pro App', () => {
  let page: CliProPage;

  beforeEach(() => {
    page = new CliProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
