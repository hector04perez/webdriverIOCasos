Feature: User Registration

  Scenario Outline: As a user, I can register into the web
    Given I am on the register page
    When I register with <Nombre>, <Apellido>, <Email>, <password>, <Fecha_Nacimiento>, <Telefono>, <claveUsuarioU>, <restauranteId>
    Then I should see a flash message saying <message>

    Examples:
      | Nombre   | Apellido             | Email                   | password             | Fecha_Nacimiento | Telefono   | claveUsuarioU | restauranteId         | message                        |
      | tomsmith | SuperSecretPassword! | usuario@m4321.com       | SuperSecretPassword! | 01/01/1990       | 1234567890 | 123           | Two Poles             | You logged into a secure area! |