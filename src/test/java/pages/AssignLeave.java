package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utills.BaseClass;

public class AssignLeave extends BaseClass{
	
	
	@FindBy (how=How.ID, using="assignleave_txtEmployee_empName")
	public WebElement employeeNmae;
	
	@FindBy (how=How.ID, using="assignleave_txtLeaveType")
	public WebElement leavetype;
	
	@FindBy (how=How.ID, using="assignleave_leaveBalance")
	public WebElement leaveBalance;
	
	@FindBy (how=How.ID, using="assignleave_txtFromDate")
	public WebElement startDate;
	
	@FindBy (how=How.ID, using="assignleave_txtToDate")
	public WebElement finishDate;
	
	@FindBy (how=How.ID, using="assignleave_partialDays")
	public WebElement partialDays;
	
	@FindBy (how=How.ID, using= "assignleave_txtComment")
	public WebElement comment;
	
	@FindBy (how=How.ID, using ="assignBtn")
	public WebElement assignBtn;
	
	@FindBy (how=How.ID, using= "confirmOkButton")
	public WebElement confirmLeave;
	
	
	public AssignLeave () {
		PageFactory.initElements(driver, this);
	}

}
