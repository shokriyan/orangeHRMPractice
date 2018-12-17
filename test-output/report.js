$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddEmployee.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Author : Andrea Ramirez"
    }
  ],
  "line": 2,
  "name": "Add Employee on Orange HRM",
  "description": "",
  "id": "add-employee-on-orange-hrm",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Add Employee and confirm",
  "description": "",
  "id": "add-employee-on-orange-hrm;add-employee-and-confirm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on PIM Link and select AddEmployee option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"\u003cfirstname\u003e\" and \"\u003cmiddlename\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Create Login Details checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I will click on the Save Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "add-employee-on-orange-hrm;add-employee-and-confirm;",
  "rows": [
    {
      "cells": [
        "firstname",
        "middlename",
        "lastname"
      ],
      "line": 17,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;1"
    },
    {
      "cells": [
        "Andre",
        "I.",
        "Ramirez"
      ],
      "line": 18,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;2"
    },
    {
      "cells": [
        "Johnny",
        "S.",
        "Walker"
      ],
      "line": 19,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;3"
    },
    {
      "cells": [
        "Bruce",
        "",
        "Lee"
      ],
      "line": 20,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;4"
    },
    {
      "cells": [
        "Donald",
        "",
        "Trump"
      ],
      "line": 21,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;5"
    },
    {
      "cells": [
        "Steven",
        "A.",
        "Spielberg"
      ],
      "line": 22,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3433625667,
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
  "name": "user login as \"admin\" and password \"admin123\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
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
  "duration": 1423713273,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Add Employee and confirm",
  "description": "",
  "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on PIM Link and select AddEmployee option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"Andre\" and \"I.\" and \"Ramirez\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Create Login Details checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I will click on the Save Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_on_PIM_Link_and_select_AddEmployee_option()"
});
formatter.result({
  "duration": 1053421546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andre",
      "offset": 9
    },
    {
      "val": "I.",
      "offset": 21
    },
    {
      "val": "Ramirez",
      "offset": 30
    }
  ],
  "location": "AddEmployeeSteps.i_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 1020385,
  "error_message": "java.lang.NullPointerException\n\tat stepDefinition.AddEmployeeSteps.i_enter_and_and(AddEmployeeSteps.java:25)\n\tat ✽.When I enter \"Andre\" and \"I.\" and \"Ramirez\"(AddEmployee.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_on_Create_Login_Details_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddEmployeeSteps.i_will_click_on_the_Save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 129543958,
  "status": "passed"
});
formatter.before({
  "duration": 2281239267,
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
  "name": "user login as \"admin\" and password \"admin123\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
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
  "duration": 1773457990,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Add Employee and confirm",
  "description": "",
  "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on PIM Link and select AddEmployee option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"Johnny\" and \"S.\" and \"Walker\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Create Login Details checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I will click on the Save Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_on_PIM_Link_and_select_AddEmployee_option()"
});
formatter.result({
  "duration": 1892128240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johnny",
      "offset": 9
    },
    {
      "val": "S.",
      "offset": 22
    },
    {
      "val": "Walker",
      "offset": 31
    }
  ],
  "location": "AddEmployeeSteps.i_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 309929,
  "error_message": "java.lang.NullPointerException\n\tat stepDefinition.AddEmployeeSteps.i_enter_and_and(AddEmployeeSteps.java:25)\n\tat ✽.When I enter \"Johnny\" and \"S.\" and \"Walker\"(AddEmployee.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_on_Create_Login_Details_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddEmployeeSteps.i_will_click_on_the_Save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 75479840,
  "status": "passed"
});
formatter.before({
  "duration": 5398757096,
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
  "name": "user login as \"admin\" and password \"admin123\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
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
  "duration": 3374245479,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Add Employee and confirm",
  "description": "",
  "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on PIM Link and select AddEmployee option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"Bruce\" and \"\" and \"Lee\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Create Login Details checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I will click on the Save Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_on_PIM_Link_and_select_AddEmployee_option()"
});
