Feature: User Form

  Scenario Outline: As a user, I can log into the web
    Given I am on the form page
    When I complete a form with <Name> <LastName> <Title> <Years> <Date>
    Then I should see a flash message saying <Message>

    Examples:
      | Name       | LastName      | Title      | Years      | Date        | Message                                  |
      | Hector     | Diaz          | Chef       | 2          | 05/03/2015  | Thanks for submitting your form          |
