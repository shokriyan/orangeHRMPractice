#Author: Mohammad
Feature: Login to Orang HRM Page

  @ValidLogin
  Scenario: valid login
    Given user enter "Admin" and "admin123"
    Then user click on Login button
    And user successfully Logg in as "Admin"
