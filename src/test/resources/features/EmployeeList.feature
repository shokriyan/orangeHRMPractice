#Author:Abbas
Feature: Employee List Search

  Background: 
    Given user login as "admin" and password "admin123"

  @empsearch
  Scenario Outline: Valid employee Search functionality
    Given I am on PIM Link and select Employee List option
    When user enter "<employeename>"
    Then Click on search
    And confirm "<employeename>" is available at list

    Examples: 
      | employeename |
      | Alejandra I. |
      | Johnny S.    |
      | Donald       |
