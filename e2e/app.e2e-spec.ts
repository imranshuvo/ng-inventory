import { NgInventoryPage } from './app.po';

describe('ng-inventory App', () => {
  let page: NgInventoryPage;

  beforeEach(() => {
    page = new NgInventoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
