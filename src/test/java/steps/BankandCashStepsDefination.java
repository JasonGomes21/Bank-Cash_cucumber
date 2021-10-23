package steps;

import org.openqa.selenium.support.PageFactory;


import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.AddNewAccount;
import page.TestBase;

public class BankandCashStepsDefination extends TestBase {
	AddNewAccount addnewaccount;
	
	@Before
	public void brforeRun() {
		initDriver();
		addnewaccount = PageFactory.initElements(driver, AddNewAccount.class);
	}
	@Given
	("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}
	
	
	@When 
	("^User enters the username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String username)throws Throwable{
		addnewaccount.enterUserName(username);
	}
	
	@When
	("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password)throws Throwable{
		addnewaccount.enterPassword(password);
	}
	
	@When
	("^User clicks on signin$")
	public void user_clicks_on_signin() throws Throwable{
		addnewaccount.clickSignInButton();
	}
	
	@Then
	("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable{
		Assert.assertEquals("Dashboard- iBilling",addnewaccount.verifyDashboardPageTitle());
		Thread.sleep(3000);
	}
	
	@And
	("^User clicks on bankAndcash$")
	public void user_clicks_on_bankAndcash() throws Throwable{
		addnewaccount.clickbankAndcash();
		Thread.sleep(3000);
	}
	@And("^User clicks on newAccount$")
	public void user_clicks_on_newAccount() throws Throwable {
	    addnewaccount.clicknewAccount();
	}

	@And("^User enters the accountTitle$")
	public void user_enters_the_accountTitle() throws Throwable {
	    addnewaccount.enteraccountTitle();
	}

	@And("^User enters the description$")
	public void user_enters_the_description() throws Throwable {
		addnewaccount.enterdescription();
	    
	}

	@And("^User enters the initialBalance$")
	public void user_enters_the_initialBalance() throws Throwable {
	    addnewaccount.enterinitialBalance();
	}

	@And("^User enters the accountNumber$")
	public void user_enters_the_accountNumber() throws Throwable {
	   addnewaccount.enteraccountNumber();
	}

	@And("^User enters the contactPerson$")
	public void user_enters_the_contactPerson() throws Throwable {
	    addnewaccount.entercontactPerson();
	}

	@And("^User enters the phone$")
	public void user_enters_the_phone() throws Throwable {
	  addnewaccount.enterphone();
	}

	@And("^User enters the internetBankingURL$")
	public void user_enters_the_internetBankingURL() throws Throwable {
	    addnewaccount.enterinternetBankingURL();
	}
	
	@And
	("^User clicks the submitButton$")
	public void user_clicks_the_submitButton() throws Throwable{
		addnewaccount.clicksubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {
	    Assert.assertEquals("Accounts- iBilling",addnewaccount.verifyAccountiBillingTitle());
	}
	
	

	
	
	
	//@After
	//public void tearDown() {
	//	driver.close();
	//	driver.quit();
	//}
}