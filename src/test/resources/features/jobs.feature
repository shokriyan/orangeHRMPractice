#Author: Tannaz Nazar
Feature: Jobs feature

  Background: 
    Given user login as "Admin" and password "admin123"
    And user on job page

  @Title
  Scenario: Adding job titles
    When user fill up information
      | jobTitle          |
      | Automation Tester |
      | Scrum Master      |
      | Developer         |
    Then user log out

  @titleError
  Scenario: Error massage for blank job title
    Given user click on add button
    When user don't provide job title
    Then error massager appears
