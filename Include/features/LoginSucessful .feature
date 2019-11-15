#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Login
  I want to use this test login function

  Scenario Outline: Login failed
  	Given I am on 'Deerberg account' site
    When I input <email> and <password>
		And I click on Login button
		Then Error Message will be show
		
    Examples: 
      | email                        | password  |
      | vinhdoanngocthe+3@gmail.com  | 123456789 |
  
  
  Scenario Outline: Login successfully
		Given I am on 'Deerberg account' site
		When I input <email> and <password>
		And I click on Login button
		Then I will navigate to account page

    Examples: 
      | email                        | password  |
      | vinhdoanngocthe+1@gmail.com  | 123123123 |

  
  
