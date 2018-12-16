package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	@FindBy (how=How.ID, using="txtUsername")
	public WebElement username;
	
	@FindBy (how=How.ID, using="txtPassword")
	public WebElement password;
	
	@FindBy(how=How.ID, using="btnLogin")
	public WebElement login;
	

	
	
	

}
