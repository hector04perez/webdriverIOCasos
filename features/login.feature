Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <firstName>, <lastName>, <job>, <education>, and <fecha>
    Then I should see a flash message saying <message>

    Examples:
      | firstName | lastName   | job       | education        | fecha       | message                                      |
      | John       | Doe       | Developer | Bachelor's       | 03/01/2015  | You logged into a secure area!               |
