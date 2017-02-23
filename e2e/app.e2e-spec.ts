import { TechSharePage } from './app.po';

describe('tech-share App', () => {
  let page: TechSharePage;

  beforeEach(() => {
    page = new TechSharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
