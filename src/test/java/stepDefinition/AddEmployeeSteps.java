package stepDefinition;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AddEmployeePage;
import utills.BaseClass;
import utills.CommonMethods;

public class AddEmployeeSteps {

	AddEmployeePage addEmp;
	

	@Given("^I am on PIM Link and select AddEmployee option$")
	public void i_am_on_PIM_Link_and_select_AddEmployee_option() throws Throwable {
		addEmp = new AddEmployeePage();
		
	
		CommonMethods.clickonLinks("PIM");
		CommonMethods.clickonLinks("Add Employee");
		
//		Thread.sleep(2000);
//		Actions obj= new Actions(BaseClass.driver);
//		obj.moveToElement(addEmp.AddEmployee).click();
		
		
	    
	}


	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and_and(String value1, String value2, String value3) throws Throwable {
		CommonMethods.enterValues(addEmp.firstname, value1);
		CommonMethods.enterValues(addEmp.middlename, value2);
		CommonMethods.enterValues(addEmp.lastname, value3);
		
	}

	@When("^I click on Create Login Details checkbox$")
	public void i_click_on_Create_Login_Details_checkbox() throws Throwable {
		//CommonMethods.click(addEmp.chkbox);
	}

	@Then("^I will click on the Save Button$")
	public void i_will_click_on_the_Save_Button() throws Throwable {
	    CommonMethods.click(addEmp.saveButton);
	}

	@Then("^verifying employee added and see \"([^\"]*)\"$")
	public void verifying_employee_added_and_see(String value) throws Throwable {
	   
		String name=addEmp.profileName.getText();
	     assertEquals(name, value);

}
	}
