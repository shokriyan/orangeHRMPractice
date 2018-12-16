#Author: shokriyan@gmail.com
Feature: Assign leaves
Background: 
Given user login as "admin" and password "admin123" 
  
  Scenario Outline: Title of your scenario
    Given User navigate to leave page
    And User navigate to assign leave
    When User enter "<employeeName>" and select "<leaveType>"
    And get leave balance days
    And User enter "<startDate>" and "<finishDate>" of leave
    And User select "<partialDay>" and enter "<comment>"
    Then User click on Assign button

    Examples: 
      | employeeName  | leaveType | startDate  | finishDate | partialDay | comment           |
      | John Smith | FMLA US   | 2018-10-05 | 2018-10-20 | None       | leave for 2 weeks |
