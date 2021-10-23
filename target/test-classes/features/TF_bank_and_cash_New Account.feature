Feature: Techfios bank and cash New Account Functionality 
@Scenario1
Scenario Outline: User should be able to login with valid credentials and open a new account 	
	Given User is on the techfios login page  
	When User enters the username as "<username>"   
	When User enters the password as "<password>"  
	When  User clicks on signin         
	Then User should land on Dashboard page 
	And User clicks on bankAndcash     
	And User clicks on newAccount  
	And User enters the accountTitle                  
	And User enters the description  
	And User enters the initialBalance  
	And User enters the accountNumber  
	And User enters the contactPerson
	And User enters the phone
	And User enters the internetBankingURL
	And User clicks the submitButton   
	Then User should be able to validate account created successfully 
	Examples:
|username|password|
|demo@techfios.com|abc123|