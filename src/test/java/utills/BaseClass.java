package utills;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BaseClass {

	public static WebDriver driver;
	
	public static Properties prop;
	

	public static void setUp(String browser) {

		initProperties(Constants.configFilePath);
		String browserName=prop.getProperty("browser");
		String getOSName= Constants.operationSystem;
		if (browserName.equalsIgnoreCase("chrome")) {
			if (getOSName.contains("Mac")) {
			System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver");
			} else if (getOSName.contains("Windows")) {
				System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
			}
			driver = new ChromeDriver();
		} else if (browserName.equalsIgnoreCase("firefox")) {
			if (getOSName.contains("Mac")) {
				System.setProperty("webdriver.gecko.driver", "src/test/resources/Drivers/geckodriver.exe");
			} else if (getOSName.contains("Windows")) {
				System.setProperty("webdriver.gecko.driver", "src/test/resources/Drivers/geckodriver");
			}
			driver = new FirefoxDriver();
		}
		
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		if (getOSName.contains("Mac")) {
			driver.manage().window().fullscreen();}
		else if (getOSName.contains("Windows")){
			driver.manage().window().maximize();
		}
		driver.get(prop.getProperty("url"));
	}
	
	public static void tearDown () {
		driver.quit();
	}
	
	
	public static void initProperties (String filepath) {
		prop = new Properties();
		
		try {
			FileInputStream fis= new FileInputStream(filepath);
			prop.load(fis);
		} catch ( IOException e) {
				e.printStackTrace();
		}
		
		
	}

}
