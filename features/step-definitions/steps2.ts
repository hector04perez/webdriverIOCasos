import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import loginPage from '../pageobjects/caso1.page';
import SecurePage from '../pageobjects/secure.page';


Given(/^I am on the form page$/, async () => {
    await browser.url("https://formy-project.herokuapp.com/form");
});

When(/^I complete a form with (.+) (.+) (.+) (.+) (.+)$/, async (Name, LastName, Title, Years, Date) => {
    await loginPage.login(Name, LastName, Title, Years, Date);
});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await SecurePage.flashAlert.waitForExist();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);

});