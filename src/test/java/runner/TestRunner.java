package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
<<<<<<< HEAD
@CucumberOptions(features = "src/test/resources/features", glue = {
"" }, dryRun = false, plugin = { "html:test-output" }, monochrome = true)
=======
>>>>>>> 20af9d3365aca85c94c1e3893fe252fe8f0d77f3

@CucumberOptions(features="src/test/resources/features",tags= {}, glue = { "stepDefinition" }, dryRun = false, plugin = {
		"html:test-output" }, monochrome = true)

public class TestRunner {

}
