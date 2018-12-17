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
  "duration": 2902910088,
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
  "duration": 1583373774,
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
  "duration": 1365337987,
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
  "duration": 2411135,
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
  "duration": 83130033,
  "status": "passed"
});
formatter.before({
  "duration": 1895228637,
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
  "duration": 1330142262,
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
  "duration": 1293731385,
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
  "duration": 553555,
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
  "duration": 78632758,
  "status": "passed"
});
formatter.before({
  "duration": 1897463737,
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
  "duration": 1323785079,
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
formatter.result({
  "duration": 939840290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bruce",
      "offset": 9
    },
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "Lee",
      "offset": 28
    }
  ],
  "location": "AddEmployeeSteps.i_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 492767,
  "error_message": "java.lang.NullPointerException\n\tat stepDefinition.AddEmployeeSteps.i_enter_and_and(AddEmployeeSteps.java:25)\n\tat ✽.When I enter \"Bruce\" and \"\" and \"Lee\"(AddEmployee.feature:11)\n",
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
  "duration": 81442378,
  "status": "passed"
});
formatter.before({
  "duration": 1923304734,
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
  "duration": 1285250808,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Add Employee and confirm",
  "description": "",
  "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;5",
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
  "name": "I enter \"Donald\" and \"\" and \"Trump\"",
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
  "duration": 1220899132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Donald",
      "offset": 9
    },
    {
      "val": "",
      "offset": 22
    },
    {
      "val": "Trump",
      "offset": 29
    }
  ],
  "location": "AddEmployeeSteps.i_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 826979,
  "error_message": "java.lang.NullPointerException\n\tat stepDefinition.AddEmployeeSteps.i_enter_and_and(AddEmployeeSteps.java:25)\n\tat ✽.When I enter \"Donald\" and \"\" and \"Trump\"(AddEmployee.feature:11)\n",
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
  "duration": 81327091,
  "status": "passed"
});
formatter.before({
  "duration": 1884031149,
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
  "duration": 1377366411,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Add Employee and confirm",
  "description": "",
  "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;6",
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
  "name": "I enter \"Steven\" and \"A.\" and \"Spielberg\"",
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
  "duration": 964284220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Steven",
      "offset": 9
    },
    {
      "val": "A.",
      "offset": 22
    },
    {
      "val": "Spielberg",
      "offset": 31
    }
  ],
  "location": "AddEmployeeSteps.i_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 437726,
  "error_message": "java.lang.NullPointerException\n\tat stepDefinition.AddEmployeeSteps.i_enter_and_and(AddEmployeeSteps.java:25)\n\tat ✽.When I enter \"Steven\" and \"A.\" and \"Spielberg\"(AddEmployee.feature:11)\n",
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
  "duration": 80859919,
  "status": "passed"
});
formatter.uri("AssignLeave.feature");
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
        "John Smith",
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
  "duration": 1810554019,
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
  "duration": 1439549052,
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
  "name": "User enter \"John Smith\" and select \"FMLA US\"",
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
  "duration": 658256126,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_navigate_to_assign_leave()"
});
formatter.result({
  "duration": 389581495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Smith",
      "offset": 12
    },
    {
      "val": "FMLA US",
      "offset": 36
    }
  ],
  "location": "AssignLeaveSteps.i_enter_and_select(String,String)"
});
formatter.result({
  "duration": 249423767,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.get_leave_balance_days()"
});
formatter.result({
  "duration": 24552747,
  "status": "passed"
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
  "duration": 321242804,
  "status": "passed"
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
  "duration": 175755601,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.user_click_on_Assign_button()"
});
formatter.result({
  "duration": 1086109291,
  "status": "passed"
});
formatter.after({
  "duration": 89417885,
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
  "duration": 1866569521,
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
  "duration": 1366236283,
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
  "duration": 79425949,
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
formatter.before({
  "duration": 1816749585,
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
  "duration": 199940376,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1177791936,
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
  "duration": 33920277,
  "status": "passed"
});
formatter.after({
  "duration": 78424820,
  "status": "passed"
});
});