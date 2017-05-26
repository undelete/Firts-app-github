import { FirtAppGithubPage } from './app.po';

describe('firt-app-github App', () => {
  let page: FirtAppGithubPage;

  beforeEach(() => {
    page = new FirtAppGithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
