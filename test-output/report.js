$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Mohammad"
    }
  ],
  "line": 2,
  "name": "Login to Orang HRM Page",
  "description": "",
  "id": "login-to-orang-hrm-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4823682739,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "valid login",
  "description": "",
  "id": "login-to-orang-hrm-page;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@ValidLogin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enter \"Admin\" and \"admin123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on Login Buton",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user successfully Logg in",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    },
    {
      "val": "admin123",
      "offset": 24
    }
  ],
  "location": "LoginSteps.user_enter_and(String,String)"
});
formatter.result({
  "duration": 1684612049,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_Button()"
});
formatter.result({
  "duration": 16458807032,
  "error_message": "java.lang.NullPointerException\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:559)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages.LoginPage.loginButton(LoginPage.java:38)\r\n\tat stepDefinition.LoginSteps.user_click_on_Login_Button(LoginSteps.java:27)\r\n\tat ✽.Then user click on Login Buton(login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_successfully_Logg_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 699902409,
  "status": "passed"
});
});