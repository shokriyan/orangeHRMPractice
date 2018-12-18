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
  "duration": 3015117017,
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
  "line": 5,
  "name": "user login as \"Admin\" and password \"admin123\"",
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
  "duration": 1588973889,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Adding job titles",
  "description": "",
  "id": "jobs-feature;adding-job-titles",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Title"
    }
  ]
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
  "duration": 2022790623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "cells": [
        "jobTitle"
      ],
      "line": 11
    },
    {
      "cells": [
        "Automation Tester"
      ],
      "line": 12
    },
    {
      "val": "Ramirez",
      "offset": 30
    }
  ],
  "location": "AddEmployeeSteps.i_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 1420464,
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
  "duration": 91624923,
  "status": "passed"
});
formatter.before({
  "duration": 3577105443,
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
      "cells": [
        "Developer"
      ],
      "line": 14
    }
  ],
  "location": "JobsSteps.user_login_as_and_password(String,String)"
});
formatter.result({
  "duration": 1265419861,
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
  "line": 15,
  "name": "user log out",
  "keyword": "Then "
});
formatter.match({
  "location": "JobsSteps.user_fill_up_information(DataTable)"
});
formatter.result({
  "duration": 1376923068,
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
  "duration": 489894,
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
  "duration": 84584603,
  "status": "passed"
});
formatter.before({
  "duration": 4194159851,
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
  "duration": 2567482834,
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
  "duration": 1296739759,
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
  "duration": 338933,
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
  "duration": 83451407,
  "status": "passed"
});
formatter.before({
  "duration": 2759156923,
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
  "duration": 2697836398,
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
  "duration": 1022825494,
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
  "duration": 421963,
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
  "duration": 79954096,
  "status": "passed"
});
formatter.before({
  "duration": 9948191433,
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
  "duration": 2218139681,
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
  "duration": 1398646012,
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
  "duration": 463844,
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
  "duration": 85581087,
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
  "duration": 2025612832,
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
  "duration": 2336365345,
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
  "duration": 1052081103,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_navigate_to_assign_leave()"
});
formatter.result({
  "duration": 1079506625,
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
  "duration": 233348368,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.get_leave_balance_days()"
});
formatter.result({
  "duration": 25524870,
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
  "duration": 327073501,
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
  "duration": 174102718,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.user_click_on_Assign_button()"
});
formatter.result({
  "duration": 1294558834,
  "status": "passed"
});
formatter.after({
  "duration": 82175398,
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
  "duration": 2893969221,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "valid login",
  "description": "",
  "id": "login-to-orang-hrm-page;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@validLog"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enter \"Admin\" and \"admin123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
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
  "duration": 190791631,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1159815794,
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
  "duration": 31162624,
  "status": "passed"
});
formatter.after({
  "duration": 80566782,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user cannot successfully login and received message \"\u003cerrorMsg\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMsg"
      ],
      "line": 18,
      "id": "login-to-orang-hrm-page;invalid-login;;1"
    },
    {
      "cells": [
        "Admin",
        "admin321",
        "Invalid credentials"
      ],
      "line": 19,
      "id": "login-to-orang-hrm-page;invalid-login;;2"
    },
    {
      "cells": [
        "admins",
        "admin123",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "login-to-orang-hrm-page;invalid-login;;3"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 21,
      "id": "login-to-orang-hrm-page;invalid-login;;4"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 22,
      "id": "login-to-orang-hrm-page;invalid-login;;5"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 23,
      "id": "login-to-orang-hrm-page;invalid-login;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1982594650,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enter \"Admin\" and \"admin321\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user cannot successfully login and received message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    },
    {
      "val": "admin321",
      "offset": 24
    }
  ],
  "location": "LoginSteps.user_enter_and(String,String)"
});
formatter.result({
  "duration": 185886688,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 519188447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 53
    }
  ],
  "location": "LoginSteps.user_cannot_successfully_login_and_received_message(String)"
});
formatter.result({
  "duration": 28024742,
  "status": "passed"
});
formatter.after({
  "duration": 82259806,
  "status": "passed"
});
formatter.before({
  "duration": 3415871242,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enter \"admins\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user cannot successfully login and received message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admins",
      "offset": 12
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "LoginSteps.user_enter_and(String,String)"
});
formatter.result({
  "duration": 204242457,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 286598522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 53
    }
  ],
  "location": "LoginSteps.user_cannot_successfully_login_and_received_message(String)"
});
formatter.result({
  "duration": 26709747,
  "status": "passed"
});
formatter.after({
  "duration": 124318141,
  "status": "passed"
});
formatter.before({
  "duration": 3152122967,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enter \"\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user cannot successfully login and received message \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_enter_and(String,String)"
});
formatter.result({
  "duration": 182639491,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 83611566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 53
    }
  ],
  "location": "LoginSteps.user_cannot_successfully_login_and_received_message(String)"
});
formatter.result({
  "duration": 27052988,
  "status": "passed"
});
formatter.after({
  "duration": 80722041,
  "status": "passed"
});
formatter.before({
  "duration": 2236672484,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enter \"Admin\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user cannot successfully login and received message \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    },
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "LoginSteps.user_enter_and(String,String)"
});
formatter.result({
  "duration": 180612927,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 85080078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 53
    }
  ],
  "location": "LoginSteps.user_cannot_successfully_login_and_received_message(String)"
});
formatter.result({
  "duration": 25948287,
  "status": "passed"
});
formatter.after({
  "duration": 81433395,
  "status": "passed"
});
formatter.before({
  "duration": 2860654844,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enter \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user cannot successfully login and received message \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_enter_and(String,String)"
});
formatter.result({
  "duration": 141885612,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 84646127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 53
    }
  ],
  "location": "LoginSteps.user_cannot_successfully_login_and_received_message(String)"
});
formatter.result({
  "duration": 26732956,
  "status": "passed"
});
formatter.after({
  "duration": 85269539,
  "status": "passed"
});
});