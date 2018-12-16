#Author: Mohammad Shokriyan
Feature: Jobs feature
Background: 
Given user login as "admin" and password "admin" 
And user navigate to job title page

  Scenario: Adding job titles
  
  Given user click on add button
  When user fill up information
  Then Confirm the job added
  
  
  
