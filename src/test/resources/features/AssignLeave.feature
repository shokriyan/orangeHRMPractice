#Author: shokriyan@gmail.com
Feature: Assign leaves
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Title of your scenario
    Given I open browser
    And I navigate to leave page
    And I navigate to assign leave
    When I enter "<employeeName>" and select "<leaveType>"
    And I enter "<startDate>" and "<finishDate>" of leave
    And I enter "<comment>"
    Then I click on Assign button

    Examples: 
      | employeeName  | leaveType | startDate  | finishDate | comment           |
      | Ali Shokriyan | FMLA US   | 2018-10-05 | 2018-10-20 | leave for 2 weeks |
