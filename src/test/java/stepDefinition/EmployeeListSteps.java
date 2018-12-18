package stepDefinition;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.EmployeeListPage;
import utills.CommonMethods;

public class EmployeeListSteps {

	EmployeeListPage empsrch;

	@Given("^I am on PIM Link and select Employee List option$")
	public void i_am_on_PIM_Link_and_select_AddEmployee_option() throws Throwable {
		empsrch = new EmployeeListPage();

		CommonMethods.clickonLinks("PIM");
		CommonMethods.clickonLinks("Employee List");
	}

	@When("^user enter \"([^\"]*)\"$")
	public void user_enter_employee_name(String employeeN) throws Throwable {
		empsrch.empName.click();
		
		CommonMethods.enterValues(empsrch.empName, employeeN);
	}

	@Then("^Click on search$")
	public void click_on_search() throws Throwable {
		Thread.sleep(2000);
		CommonMethods.click(empsrch.searchBtn);
		Thread.sleep(2000);

	}

	@Then("^confirm \"([^\"]*)\" is available at list$")
	public void confirm_employee_is_available_at_list(String empName) throws Throwable {

		String actualValue = empsrch.getEmployeeList(empName);

		Assert.assertEquals(empName, actualValue);

	}

}
