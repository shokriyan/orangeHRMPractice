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
<<<<<<< HEAD
	
	@FindBy(how=How.ID, using="btnLogin")
	public WebElement login;
	
=======

	@FindBy(how = How.ID, using = "btnLogin")
	public WebElement btnlogin;

	@FindBy(how = How.XPATH, using = "//img[contains(@src,'logo')]")
	public WebElement logo;

	@FindBy(how=How.ID , using="welcome")
	private WebElement LoggedUser;
>>>>>>> fe7fd5285258540eb426884b275684db8bf40413
	
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	public String getLoggedUser() {
		String getUser=LoggedUser.getText();
		return getUser.trim().substring(8);
		
	}






	

}
