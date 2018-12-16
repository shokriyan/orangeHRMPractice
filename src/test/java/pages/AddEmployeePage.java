package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utills.BaseClass;

public class AddEmployeePage extends BaseClass{
	
	@FindBy(xpath="//a[contains(@id,'menu_pim_addEmployee')]")
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
	
	public AddEmployeePage(){
		PageFactory.initElements(driver, this); 
		
	}
	
}
