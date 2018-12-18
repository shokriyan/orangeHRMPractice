package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utills.BaseClass;

public class EmployeeListPage extends BaseClass {

	@FindBy(how = How.ID, using = "empsearch_employee_name_empName")
	public WebElement empName;

	@FindBy(how = How.ID, using = "searchBtn")
	public WebElement searchBtn;

	public EmployeeListPage() {
		PageFactory.initElements(driver, this);
	}
	
	

}
