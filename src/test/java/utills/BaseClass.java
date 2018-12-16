package utills;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BaseClass {

	public static WebDriver driver;

	public static void setUp(String browser) {

		if (browser.equalsIgnoreCase("chrome")) {
			if (System.getProperty("os.name").contains("Mac")) {
				System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver");
			} else if (System.getProperty("os.name").contains("Windows")) {
				System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
			}
			driver = new ChromeDriver();
		} else if (browser.equalsIgnoreCase("firefox")) {
			if (System.getProperty("os.name").contains("Mac")) {
				System.setProperty("webdriver.gecko.driver", "src/test/resources/Drivers/geckodriver.exe");
			} else if (System.getProperty("os.name").contains("Windows")) {
				System.setProperty("webdriver.gecko.driver", "src/test/resources/Drivers/geckodriver");
			}
			driver = new FirefoxDriver();
		}

	}

}
