package stepDefinition;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import utills.BaseClass;

public class HooksClass {
	
	BaseClass base; 
	
	@Before
	public void openingBrowser() {
		base = new BaseClass(); 
		base.setUp();
	}
	@After
	public void ClosingBrowser(Scenario scenario) {
		scenario.getStatus();
		scenario.getName();
		base.tearDown();
		
	}

}
