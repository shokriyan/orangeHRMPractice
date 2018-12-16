package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AssignLeave;
import utills.CommonMethods;

public class AssignLeaveSteps {

	AssignLeave leave = new AssignLeave();

	@Given("^User navigate to leave page$")
	public void i_navigate_to_leave_page() {
		CommonMethods.clickonLinks("Leave");
	}

	@Given("^User navigate to assign leave$")
	public void i_navigate_to_assign_leave() {
		CommonMethods.clickonLinks("Assign Leave");
	}

	@When("^User enter \"(.*)\" and select \"(.*)\"$")
	public void i_enter_and_select(String employeeName, String leaveType) {
		CommonMethods.enterValues(leave.employeeNmae, employeeName);
		CommonMethods.selectDropdown(leave.leavetype, leaveType);
	}

	@When("^get leave balance days$")
	public void get_leave_balance_days() {
		String balance = leave.leaveBalance.getText();
		System.out.println(balance);
	}

	@When("^User enter \"(.*)\" and \"(.*)\" of leave$")
	public void i_enter_and_of_leave(String fromDate, String toDate) {
		CommonMethods.enterValues(leave.startDate, fromDate);
		CommonMethods.enterValues(leave.finishDate, toDate);

	}

	@When("^User select \"([^\"]*)\" and enter \"([^\"]*)\"$")
	public void user_select_and_enter(String partialDay, String comment) {
		CommonMethods.selectDropdown(leave.partialDays, partialDay);
		CommonMethods.enterValues(leave.comment, comment);
	}

	@Then("^User click on Assign button$")
	public void user_click_on_Assign_button() {
		CommonMethods.click(leave.assignBtn);
		CommonMethods.click(leave.confirmLeave);

	}
}