#Author:Abbas
Feature: Employee List Search

  Background: 
    Given user login as "admin" and password "admin123"

  @empsearch
  Scenario Outline: Valid employee Search functionality
    Given I am on PIM Link and select Employee List option
    When user enter "<employeename>"
    Then Click on search
    And confirm employee is available at list

    Examples: 
      | employeename |
      | abbas Azaad  |
      | mamad Raha   |
      | ali shoki    |
