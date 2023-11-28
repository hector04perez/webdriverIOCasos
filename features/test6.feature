Feature: Login functionality

  Scenario: Unsuccessful login with non-existing account
    Given I am on the login page
    When I enter an invalid email
    Then I should see a notification saying there's an error trying to comunicate with the server
