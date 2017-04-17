import { browser, element, by } from 'protractor';

export class GfkUpdatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gfk-root h1')).getText();
  }
}
