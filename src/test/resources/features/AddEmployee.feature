# Author : Andrea Ramirez
Feature: Add Employee on Orange HRM

  Background: 
    Given user login as "admin" and password "admin123"

  Scenario Outline: Add Employee and confirm
    And I am on PIM Link and select AddEmployee option
    When I enter "<firstname>" and "<middlename>" and "<lastname>"
    And I click on Create Login Details checkbox
    Then I will click on the Save Button
    And verifying employee added and see "<profilename>"

    Examples: 
      23

      | firstname | middlename | lastname  | profilename          |
      | Alejandra | I.         | Ramirez   | Alejandra I. Ramirez |
      | Johnny    | S.         | Walker    | Johnny S. Walker     |
      | Bruce     |            | Lee       | Bruce Lee            |
      | Donald    |            | Trump     | Donald Trump         |
      | Steven    | A.         | Spielberg | Steven A. Spielberg  |
