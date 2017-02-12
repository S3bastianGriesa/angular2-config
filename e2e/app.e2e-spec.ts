import { Angular2ConfigPage } from './app.po';

describe('angular2-config App', function() {
  let page: Angular2ConfigPage;

  beforeEach(() => {
    page = new Angular2ConfigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
