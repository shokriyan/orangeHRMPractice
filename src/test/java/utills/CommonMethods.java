package utills;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CommonMethods extends BaseClass{
	
	
	
	
	public void enterValues (WebElement element, String value) {
		element.clear();
		element.sendKeys(value);
		
	}
	
	public void click(WebElement element) {
		element.click();
	}
	
	public WebElement waiting (WebElement element) {  /// waiting for my team to finish base class
		WebDriverWait wait= new WebDriverWait(driver, 30);
		
		return wait.until(ExpectedConditions.elementToBeClickable(element));
	}
	
	public void jse () {
		JavascriptExecutor js= (JavascriptExecutor)driver));
	}
}
