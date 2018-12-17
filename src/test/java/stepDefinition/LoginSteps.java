package stepDefinition;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
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
		Assert.assertEquals(expectedUser, ActualUser);

	}

	@Given("^user enter valid username \"([^\"]*)\" and invalid password \"([^\"]*)\"$")
	public void user_enter_valid_username_and_invalid_password(String userN, String pass) throws Throwable {
		login = new LoginPage();
		CommonMethods.enterValues(login.username, userN);
		CommonMethods.enterValues(login.password, pass);
	}

	@Then("^user cannot successfully login and received message \"([^\"]*)\"$")
	public void user_cannot_successfully_login_and_received_message(String expcted) throws Throwable {
		login = new LoginPage();
		String actualUser = login.invalidLog();
		Assert.assertEquals(actualUser, expcted);

	}

}
