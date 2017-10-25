import { VikingosPage } from './app.po';

describe('vikingos App', function() {
  let page: VikingosPage;

  beforeEach(() => {
    page = new VikingosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
