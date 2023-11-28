import { Given, Then, When } from "@wdio/cucumber-framework";
import { browser } from "@wdio/globals";

Given("I am on the login page", async () => {
  await browser.url("http://localhost:3000/Login");
  await browser.pause(1000);
});

When("I enter an invalid email", async () => {
  await (await browser.$("#floatingEmail")).setValue("blodmortem23@outlooinvalido.12");
  await (await browser.$("#floatingPassword")).setValue("Asd12345");
  const loginButton = await browser.$(".btn.btn-outline-dark");
  await loginButton.click();
});

Then(
  "I should see a notification saying there's an error trying to comunicate with the server",
  async () => {
    // Esperar un tiempo para permitir que aparezca la notificación (ajusta este tiempo según sea necesario)
  await browser.pause(2000);

  // Verificar la presencia de la notificación
  const notification = await browser.$(".Toastify__toast-body");
  await expect(notification).toBeDisplayed();
  }
);
