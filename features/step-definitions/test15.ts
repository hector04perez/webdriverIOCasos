import { Given, Then, When } from "@wdio/cucumber-framework";
import { browser } from "@wdio/globals";

Given("I am in login page", async () => {
  await browser.url("http://localhost:3000/Login");
  await browser.pause(2000);
});

When("I put another email", async () => {
  await (await browser.$("#floatingEmail")).setValue("");
  await (await browser.$("#floatingPassword")).setValue("123");
  const loginButton = await browser.$(".btn.btn-outline-dark");
  await loginButton.click();
});

Then(
  "Seending us an alert saying wrong keys",
  async () => {
  await browser.pause(2000);

  // Verificar la presencia de la notificación
  const notification = await browser.$(".Toastify__toast-body");
  await expect(notification).toBeDisplayed();
  }
);

