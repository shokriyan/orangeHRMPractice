package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.EmployeeListPage;
import utills.CommonMethods;

public class EmployeeListSteps {
	EmployeeListPage empsrch;

	@Given("^I am on PIM Link and select Employee List option$")
	public void i_am_on_PIM_Link_and_select_AddEmployee_option() throws Throwable {
		CommonMethods.clickonLinks("PIM");
		CommonMethods.clickonLinks("Employee List");
	}

	@When("^user enter \"([^\"]*)\"$")
	public void user_enter_employee_name(String employeeN) throws Throwable {
		CommonMethods.enterValues(empsrch.empName, employeeN);
	}

	@Then("^Click on search$")
	public void click_on_search() throws Throwable {
		CommonMethods.click(empsrch.searchBtn);

	}

	@Then("^confirm employee is available at list$")
	public void confirm_employee_is_available_at_list() throws Throwable {
		

	}

}
