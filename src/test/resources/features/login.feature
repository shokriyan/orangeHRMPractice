#Author: Mohammad
Feature: Login to Orang HRM Page

  @validLog
  Scenario: valid login
    Given user enter "Admin" and "admin123"
    Then user click on Login button
    And user successfully Logg in as "Admin"

  @invalidLog
  Scenario Outline: invalid login
    Given user enter "<username>" and "<password>"
    Then user click on Login button
    And user cannot successfully login and received message "<errorMsg>"

    Examples: 
      | username | password | errorMsg                 |
      | Admin    | admin321 | Invalid credentials      |
      | admins   | admin123 | Invalid credentials      |
      |          | admin123 | Username cannot be empty |
      | Admin    |          | Password cannot be empty |
      |          |          | Username cannot be empty |
