# Author : Andrea Ramirez
Feature: Add Employee on Orange HRM
Background: 
Given user login as "admin" and password "admin123"
 
 
 
Scenario Outline: Add Employee and confirm

	And I am on PIM Link and select AddEmployee option
	When I enter "<firstname>" and "<middlename>" and "<lastname>" 
	And I click on Create Login Details checkbox
	Then I will click on the Save Button
	
Examples:
	
	|firstname| middlename| lastname|
	|Andre 		|I.					|Ramirez	|
	|Johnny		|S.		      |Walker		|
	|Bruce 		|						|Lee			|
	|Donald 	|						|Trump		|
	|Steven		|A.					|Spielberg|
	

