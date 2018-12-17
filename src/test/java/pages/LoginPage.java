package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utills.BaseClass;

public class LoginPage extends BaseClass {

	@FindBy(how = How.ID, using = "txtUsername")
	public WebElement username;

	@FindBy(how = How.ID, using = "txtPassword")
	public WebElement password;
	
	@FindBy(how=How.ID, using="btnLogin")
	public WebElement btnlogin;
	

	@FindBy(how = How.XPATH, using = "//img[contains(@src,'logo')]")
	public WebElement logo;

	@FindBy(how=How.ID , using="welcome")
	private WebElement LoggedUser;

	@FindBy (how=How.ID, using="spanMessage")
	WebElement spanMessage;
	
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	public String getLoggedUser() {
		String getUser=LoggedUser.getText();
		return getUser.trim().substring(8);
		
	}
	
	public String invalidLog() {
		String getUser=spanMessage.getText();
		return getUser.trim();
	}






	

}
