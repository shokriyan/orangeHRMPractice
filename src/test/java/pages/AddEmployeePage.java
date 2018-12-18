package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utills.BaseClass;

public class AddEmployeePage extends BaseClass{
	
	@FindBy (xpath="//b[contains(text(),'PIM')]")
	public WebElement PIMlink;
	
	@FindBy(id="menu_pim_addEmployee")
	public WebElement AddEmployee ;
	
	@FindBy(id="firstName")
	public WebElement firstname ;
	
	@FindBy(id="middleName")
	public WebElement  middlename;
	
	@FindBy(id="lastName")
	public WebElement lastname ;
	
	@FindBy(id="chkLogin")
	public WebElement chkbox ;
	
	@FindBy(id="btnSave")
	public WebElement saveButton ;
	
	@FindBy (xpath="/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/h1[1]")
	public WebElement profileName;
	
	@FindBy (xpath="menu_pim_addEmployee")
	public WebElement AddEmployeeLink;
	
	public AddEmployeePage(){
		PageFactory.initElements(driver, this); 
		
	}
	
}
