#Author: Mohammad
Feature: Login to Orang HRM Page

@ValidLogin
Scenario: valid login
Given user enter "Admin" and "admin123" 
Then user click on Login Buton 
And user successfully Logg in 
