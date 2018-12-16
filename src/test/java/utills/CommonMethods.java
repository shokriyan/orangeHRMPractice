package utills;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CommonMethods extends BaseClass{
	
	
	
	public static void enterValues (WebElement element, String value) {
		element.clear();
		element.sendKeys(value);
		
	}
	
	public static void click(WebElement element) {
		WebElement elem=waiting(element);
		elem.click();
	}
	
	public static WebElement waiting (WebElement element) {  /// waiting for my team to finish base class
		WebDriverWait wait= new WebDriverWait(driver, 30);
		return wait.until(ExpectedConditions.elementToBeClickable(element));
	}
	
	public static void jScriptExecutorClick (WebElement element) {
		JavascriptExecutor click= (JavascriptExecutor) driver;
		click.executeScript("argument[0].click()",element);
	}
	
	public static void jScriptExecutorScroll(WebElement element) {
		JavascriptExecutor scroll = (JavascriptExecutor) driver;
		scroll.executeAsyncScript("argument[0].scrollIntoView(True)", element);
	}
	
	public static void clickonLinks(String linkText) {
		WebElement elm = driver.findElement(By.linkText(linkText));
		WebElement linkElement = waiting(elm);
		linkElement.click();
		
	}
	
	public static void selectDropdown (WebElement element, String value) {
		Select dropdown= new Select(element);
		dropdown.selectByVisibleText(value);
	}

}
