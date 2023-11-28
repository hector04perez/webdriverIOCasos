Feature: Unregistered user

  Scenario: Unregistered user
    Given I am in login page
    When I put another email
    Then Seending us an alert saying wrong keys
