import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getIntroText() {
    return element(by.className('name')).getText();
  }
}
