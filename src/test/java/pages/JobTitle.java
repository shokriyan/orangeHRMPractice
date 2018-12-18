package pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utills.BaseClass;

public class JobTitle extends BaseClass {

	@FindBy(how = How.ID, using = "btnAdd")
	public WebElement addBtn;

	@FindBy(how = How.NAME, using = "jobTitle[jobTitle]")
	public WebElement jobTitleTxt;

	@FindBy(how = How.ID, using = "btnSave")
	public WebElement saveBtn;

	public JobTitle() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.XPATH, using = "//table[@id='resultTable']/tbody")
	private WebElement tableBody;

	public String getJobTitleTable(String dataTable) {

		List<WebElement> col = tableBody.findElements(By.xpath("tr/td[2]"));

		String actualValue = null;

		for (WebElement webElement : col) {
			String jobtitle = webElement.getText();

			if (jobtitle.equals(dataTable)) {

				actualValue = jobtitle;
				break;

			}

		}
		return actualValue;
	}

	@FindBy(how = How.XPATH, using = "//span[@class='validation-error']")
	private WebElement errorMsg;

	public boolean verifyError() {
		return errorMsg.isDisplayed();

	}

}
