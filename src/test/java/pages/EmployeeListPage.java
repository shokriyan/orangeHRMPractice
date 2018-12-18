package pages;

import java.util.List;

import org.openqa.selenium.By;
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
	
	@FindBy(how=How.XPATH, using="//table [@id='resultTable']/tbody")
	private WebElement tableBody;

	
	public EmployeeListPage() {
		PageFactory.initElements(driver, this);
	}
	
	public String getEmployeeList(String data) {
		
		List<WebElement> col = tableBody.findElements(By.xpath("tr/td[3]"));
		String empList = null;
		for (WebElement webElement : col) {
			String jobtitle = webElement.getText();
			if(jobtitle.equals(data)) {
				jobtitle = empList;
				break;
			}

			
		}
		return data;

	}
	
	
	

}
