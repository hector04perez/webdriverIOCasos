import { Given, Then, When } from "@wdio/cucumber-framework";
import { browser } from "@wdio/globals";

Given("I am on the login page", async () => {
  await browser.url("http://localhost:3000/Login");
  await browser.pause(1000);
});

When("I enter an empty password", async () => {
  await (await browser.$("#floatingEmail")).setValue("axa@gmail.com");
  await (await browser.$("#floatingPassword")).setValue("");
  const loginButton = await browser.$(".btn.btn-outline-dark");
  await loginButton.click();
});

Then(
  "Seending us to the menu",
  async () => {
  await browser.pause(2000);

  // Verificar la presencia de la notificación
  const notification = await browser.$(".Toastify__toast-body");
  await expect(notification).toBeDisplayed();
  }
);
