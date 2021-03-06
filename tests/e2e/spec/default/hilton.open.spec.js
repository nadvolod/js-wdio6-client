import { restartApp } from '../../helpers/utils';
import CovidScreen from '../../screenObjects/covidScreen';
import HomePage from '../../screenObjects/homePage';

describe('Home page', () => {
  beforeEach(() => {
    restartApp();
    CovidScreen.back();
  });

  it('should open', () => {
    expect(HomePage.isDisplayed()).toEqual(true);
  });
});
