package stepDefinition;

import cucumber.api.java.en.Given;
import pages.LoginPage;
import utills.CommonMethods;

public class JobsSteps {
	
	LoginPage login; 
	
	@Given("^user login as \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_login_as_and_password(String username, String password) throws Throwable {
		
		login = new LoginPage();
		CommonMethods.enterValues(login.username, username);
		CommonMethods.enterValues(login.password, password);
		CommonMethods.click(login.login);

	}
	
	


}
