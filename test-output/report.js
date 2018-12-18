$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobs.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Tannaz Nazar"
    }
  ],
  "line": 2,
  "name": "Jobs feature",
  "description": "",
  "id": "jobs-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4866472440,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user login as \"Admin\" and password \"admin123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user on job page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 15
    },
    {
      "val": "admin123",
      "offset": 36
    }
  ],
  "location": "JobsSteps.user_login_as_and_password(String,String)"
});
formatter.result({
  "duration": 1773198372,
  "status": "passed"
});
formatter.match({
  "location": "JobsSteps.user_on_job_page()"
});
formatter.result({
  "duration": 1316016282,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Error massage for blank job title",
  "description": "",
  "id": "jobs-feature;error-massage-for-blank-job-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@titleError"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user click on add button",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user don\u0027t provide job title",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "error massager appears",
  "keyword": "Then "
});
formatter.match({
  "location": "JobsSteps.user_click_on_add_button()"
});
formatter.result({
  "duration": 629037038,
  "status": "passed"
});
formatter.match({
  "location": "JobsSteps.user_don_t_provide_job_title()"
});
formatter.result({
  "duration": 153178595,
  "status": "passed"
});
formatter.match({
  "location": "JobsSteps.error_massager_appears()"
});
formatter.result({
  "duration": 33875554,
  "status": "passed"
});
formatter.after({
  "duration": 143448784,
  "status": "passed"
});
});