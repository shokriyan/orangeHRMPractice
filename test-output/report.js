$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AssignLeave.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: shokriyan@gmail.com"
    }
  ],
  "line": 2,
  "name": "Assign leaves",
  "description": "",
  "id": "assign-leaves",
  "keyword": "Feature"
});

formatter.scenarioOutline({
  "line": 6,
  "name": "Title of your scenario",
  "description": "",
  "id": "assign-leaves;title-of-your-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"

});
formatter.step({
  "line": 7,
  "name": "User navigate to leave page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User navigate to assign leave",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter \"\u003cemployeeName\u003e\" and select \"\u003cleaveType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "get leave balance days",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter \"\u003cstartDate\u003e\" and \"\u003cfinishDate\u003e\" of leave",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User select \"\u003cpartialDay\u003e\" and enter \"\u003ccomment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Assign button",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "assign-leaves;title-of-your-scenario;",
  "rows": [
    {
      "cells": [
        "employeeName",
        "leaveType",
        "startDate",
        "finishDate",
        "partialDay",
        "comment"
      ],
      "line": 16,
      "id": "assign-leaves;title-of-your-scenario;;1"
    },
    {
      "cells": [
        "Ali Shokriyan",
        "FMLA US",
        "2018-10-05",
        "2018-10-20",
        "None",
        "leave for 2 weeks"
      ],
      "line": 17,
      "id": "assign-leaves;title-of-your-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6616722327,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user login as \"admin\" and password \"admin\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 15
    },
    {
      "val": "admin",
      "offset": 36
    }
  ],
  "location": "JobsSteps.user_login_as_and_password(String,String)"
});
formatter.result({
  "duration": 1248499921,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Title of your scenario",
  "description": "",
  "id": "assign-leaves;title-of-your-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,

  "name": "User navigate to leave page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User navigate to assign leave",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter \"Ali Shokriyan\" and select \"FMLA US\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "get leave balance days",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter \"2018-10-05\" and \"2018-10-20\" of leave",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User select \"None\" and enter \"leave for 2 weeks\"",
  "matchedColumns": [
    4,
    5
  ],

  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Assign button",
  "keyword": "Then "
});
formatter.match({
  "location": "AssignLeaveSteps.i_navigate_to_leave_page()"
});
formatter.result({
  "duration": 2628088584,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:686)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:682)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat utills.CommonMethods.waiting(CommonMethods.java:27)\r\n\tat utills.CommonMethods.clickonLinks(CommonMethods.java:42)\r\n\tat stepDefinition.AssignLeaveSteps.i_navigate_to_leave_page(AssignLeaveSteps.java:15)\r\n\tat ✽.Given User navigate to leave page(AssignLeave.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_navigate_to_assign_leave()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ali Shokriyan",
      "offset": 12
    },
    {
      "val": "FMLA US",
      "offset": 39
    }
  ],
  "location": "AssignLeaveSteps.i_enter_and_select(String,String)"
});
formatter.result({

  "status": "skipped"
});
formatter.match({
  "location": "AssignLeaveSteps.get_leave_balance_days()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-10-05",
      "offset": 12
    },
    {
      "val": "2018-10-20",
      "offset": 29
    }
  ],
  "location": "AssignLeaveSteps.i_enter_and_of_leave(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "None",
      "offset": 13
    },
    {
      "val": "leave for 2 weeks",
      "offset": 30
    }
  ],
  "location": "AssignLeaveSteps.user_select_and_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AssignLeaveSteps.user_click_on_Assign_button()"

});
formatter.result({
  "duration": 52140069,
  "status": "passed"
});
formatter.after({

  "duration": 659351413,

  "status": "passed"
});
formatter.uri("jobs.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Mohammad Shokriyan"
    }
  ],
  "line": 2,
  "name": "Jobs feature",
  "description": "",
  "id": "jobs-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5336976946,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user login as \"Admin\" and password \"admin123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigate to job title page",
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
  "duration": 1471486263,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 7,
  "name": "Adding job titles",
  "description": "",
  "id": "jobs-feature;adding-job-titles",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user click on add button",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user fill up information",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Confirm the job added",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 716340202,
  "status": "passed"
});
formatter.uri("login.feature");
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
