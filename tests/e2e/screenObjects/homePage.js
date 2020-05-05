class CovidScreen {
    isDisplayed() {
        return $('//*[@resource-id="com.hilton.android.hhonors.dev.debug:id/search_bar"]').isDisplayed();
    }
}

export default new CovidScreen();