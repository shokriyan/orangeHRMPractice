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
  "duration": 5068038981,
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
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user successfully Logg in as \"Admin\"",
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
  "duration": 384369484,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1007640476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    }
  ],
  "location": "LoginSteps.user_successfully_Logg_in_as(String)"
});
formatter.result({
  "duration": 52140069,
  "status": "passed"
});
formatter.after({
  "duration": 770302899,
  "status": "passed"
});
});