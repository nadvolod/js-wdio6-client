import { restartApp } from '../../helpers/utils';
import CovidScreen from '../../screenObjects/covidScreen';
import HomePage from '../../screenObjects/homePage';

describe('Login', () => {
  beforeEach(() => {
    restartApp();
    CovidScreen.back();
  });

  it('should always pass', () => {
    expect(true).toBeTrue();
  });

  it('should open simple', () => {
    //Finding an element by accessibility Id
    $('~Navigate up').click();
    //Using XPath
    expect($('//*[@resource-id="com.hilton.android.hhonors.dev.debug:id/search_bar"]').isDisplayed()).toBeTrue();
  });

  it('should open', () => {
    HomePage.isDisplayed().toBeTruthy();
  });
});
