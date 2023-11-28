import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import registerPage from '../pageobjects/register.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    register: registerPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


When(/^I register with (.+), (.+), (.+), (.+), (.+), (.+), (.+), (.+)$/, async (Nombre, Apellido, Email, password, Fecha_Nacimiento,Telefono,claveUsuarioU,restauranteId) => {
    await registerPage.register(Nombre, Apellido, Email, password,  Fecha_Nacimiento,Telefono,claveUsuarioU,restauranteId);
});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

