package page;

import java.util.Random;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddNewAccount {

	WebDriver driver;

	public AddNewAccount(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement UserName;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement Password;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement SignInButton;
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]")
	WebElement bankAndCashButton;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")
	WebElement newAccountButton;
	@FindBy(how = How.XPATH, using = "//input[@class='form-control' and @id='account']")
	WebElement accountTitleField;
	@FindBy(how = How.XPATH, using = "//input[@class='form-control' and @id='description']")
	WebElement descriptionField;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement initialBalanceField;
	@FindBy(how = How.XPATH, using = "//input[@class='form-control'and@id='account_number']")
	WebElement accountNumberField;
	@FindBy(how = How.XPATH, using = "//input[@class='form-control'and@id='contact_person']")
	WebElement contactPersonField;
	@FindBy(how = How.XPATH, using = "//input[@class='form-control'and@id='contact_phone']")
	WebElement phoneNumberField;
	@FindBy(how = How.XPATH, using = "//input[@class='form-control'and@id='ib_url']")
	WebElement internetBankingURLField;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
	WebElement submitButton;

	Random rnd = new Random();
	int generatedNo = rnd.nextInt(999);

	// Methods to interact with the elements
	public void enterUserName(String userName) {
		UserName.sendKeys(userName);
	}

	public void enterPassword(String password) {
		Password.sendKeys(password);
	}

	public void clickSignInButton() {
		SignInButton.click();

	}

	public String verifyDashboardPageTitle() {
		return driver.getTitle();

	}

	public void clickbankAndcash() {
		bankAndCashButton.click();

	}

	public void clicknewAccount() {
		newAccountButton.click();
	}

	public void enteraccountTitle() {
		accountTitleField.sendKeys("FreeBank" + generatedNo);

	}

	public void enterdescription() {
		descriptionField.sendKeys("Loan" + generatedNo);
	}

	public void enterinitialBalance() {
		initialBalanceField.sendKeys("563417" + generatedNo);
	}

	public void enteraccountNumber() {
		accountNumberField.sendKeys("566635" + generatedNo);
	}
	public void entercontactPerson() {
		contactPersonField.sendKeys("Jimmy"+ generatedNo);
	
	}
	public void enterphone() {
		phoneNumberField.sendKeys("4563217459" +generatedNo );
	}
	public void enterinternetBankingURL() {
		internetBankingURLField.sendKeys("https://www.google.com/");
	}
	public void clicksubmitButton() {
		submitButton.click();
	}
	
	public String verifyAccountiBillingTitle() {
		return driver.getTitle();

	}
}
