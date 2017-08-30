import { Ng2Learn2Page } from './app.po';

describe('ng2-learn2 App', () => {
  let page: Ng2Learn2Page;

  beforeEach(() => {
    page = new Ng2Learn2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
