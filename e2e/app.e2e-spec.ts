import { PhiNettrekPage } from './app.po';

describe('phi-nettrek App', () => {
  let page: PhiNettrekPage;

  beforeEach(() => {
    page = new PhiNettrekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
