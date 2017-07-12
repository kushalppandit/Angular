import { AngularDemoAppPage } from './app.po';

describe('angular-demo-app App', () => {
  let page: AngularDemoAppPage;

  beforeEach(() => {
    page = new AngularDemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
