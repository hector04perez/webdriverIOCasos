Feature: Login empty password

  Scenario: Unsuccessful login with non-typed password
    Given I am on the login page
    When I enter an empty password
    Then Seending us to the menu
