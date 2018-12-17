package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

<<<<<<< HEAD
@RunWith (Cucumber.class)
@CucumberOptions(features= {"src/test/resources/features"}
	,glue= ""
	,plugin = {"pretty"}	
	,dryRun = false
	,strict = false
	,monochrome = true
		
		)
=======
@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\features", glue = {
"" }, dryRun = false, plugin = { "html:test-output" }, monochrome = true)
>>>>>>> fe7fd5285258540eb426884b275684db8bf40413

public class TestRunner {


}
