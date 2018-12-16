# Author : Andrea Ramirez
Feature: Add Employee on Orange HRM

Scenario: Add Employee and confirm

	Given I am on PIM Link and select AddEmployee option
	When I enter "firstname" and "middlename" and "lastname"
	And I click on Create Login Details checkbox
	Then I will click on the Save Button
	
	

