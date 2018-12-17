package stepDefinition;


import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import utills.BaseClass;
import utills.CommonMethods;

public class LoginSteps extends BaseClass {
LoginPage login;
	@Given("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String uName, String pword) {
		login = new LoginPage();
		CommonMethods.enterValues(login.username, uName);
		CommonMethods.enterValues(login.password, pword);
	}

	@Then("^user click on Login button$")
	public void user_click_on_Login_button() throws Throwable {
		CommonMethods.click(login.btnlogin);

	}

	@Then("^user successfully Logg in as \"([^\"]*)\"$")
	public void user_successfully_Logg_in_as(String expectedUser) {
		String ActualUser = login.getLoggedUser();
		Assert.assertEquals(ActualUser, expectedUser);

	}

}
