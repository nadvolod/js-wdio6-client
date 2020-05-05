import { restartApp } from '../../helpers/utils';
import CovidScreen from '../../screenObjects/covidScreen';
import HomePage from '../../screenObjects/homePage';

describe('Automation sanity tests', () => {
  beforeEach(() => {
    restartApp();
    CovidScreen.back();
  });

  it('should always pass', () => {
    expect(true).toEqual(true);
  });
});
