package stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import utills.BaseClass;
import utills.CommonMethods;

public class LoginSteps extends BaseClass {

	@Given("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String uName, String pword) throws Throwable {
		
		LoginPage log = new LoginPage();
		log.userN(uName);
		log.pass(pword);
		log.loginButton();

	}

	@Then("^user click on Login Buton$")
	public void user_click_on_Login_Button() throws Throwable {
		Thread.sleep(3000);
		LoginPage log = new LoginPage();
		log.loginButton();

	}

	@Then("^user successfully Logg in$")
	public void user_successfully_Logg_in() throws Throwable {
		Thread.sleep(3000);
		LoginPage log = new LoginPage();
		log.verifyLog();

	}

}
