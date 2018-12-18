package stepDefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.JobTitle;
import pages.LoginPage;
import utills.CommonMethods;

public class JobsSteps {
	JobTitle job;
	LoginPage login;

	@Given("^user login as \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_login_as_and_password(String username, String password) throws Throwable {

		login = new LoginPage();
		CommonMethods.enterValues(login.username, username);
		CommonMethods.enterValues(login.password, password);
		CommonMethods.click(login.btnlogin);

	}

	@Given("^user on job page$")
	public void user_on_job_page() throws Throwable {
		CommonMethods.clickonLinks("Admin");
		CommonMethods.clickonLinks("Job");
		CommonMethods.clickonLinks("Job Titles");
	}

	@When("^user fill up information$")
	public void user_fill_up_information(DataTable jobTitleTable) throws Throwable {
		
		job = new JobTitle();
		
		
		List<Map<String, String>> maps = jobTitleTable.asMaps(String.class, String.class);

		for (Map<String, String> mapcell : maps) {
			CommonMethods.click(job.addBtn);
			String jobtitle = mapcell.get("jobTitle");
			CommonMethods.enterValues(job.jobTitleTxt, jobtitle);
			CommonMethods.click(job.saveBtn);

			String getTitle = job.getJobTitleTable(jobtitle);
			Assert.assertEquals(jobtitle, getTitle);
		}
	}
	
	@Then("^user log out$")
	public void user_log_out() throws Throwable {
	  CommonMethods.clickonLinks("Welcome Admin");
	  CommonMethods.clickonLinks("Logout");
	  
	}
}
