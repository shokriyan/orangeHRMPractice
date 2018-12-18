
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobs.feature");
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EmployeeList.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,

      "value": "#Author:Abbas"
    }
  ],
  "line": 2,
  "name": "Employee List Search",
  "description": "",

  "id": "employee-list-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Valid employee Search functionality",
  "description": "",
  "id": "employee-list-search;valid-employee-search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@empsearch"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on PIM Link and select Employee List option",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cemployeename\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on search",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "confirm \"\u003cemployeename\u003e\" is available at list",
  "keyword": "And "
});

formatter.examples({
  "line": 14,
  "name": "",
  "description": "23",
  "description": "",
  "id": "add-employee-on-orange-hrm;add-employee-and-confirm;",
  "rows": [
    {
      "cells": [
        "firstname",
        "middlename",
  "id": "employee-list-search;valid-employee-search-functionality;",
  "rows": [
    {
      "cells": [
        "employeename"
      ],
      "line": 15,
      "id": "employee-list-search;valid-employee-search-functionality;;1"
    },
    {
      "cells": [
        "abbas Azaad"
      ],
      "line": 16,
      "id": "employee-list-search;valid-employee-search-functionality;;2"
    },
    {
      "cells": [
        "mamad Raha"
      ],
      "line": 17,
      "id": "employee-list-search;valid-employee-search-functionality;;3"
    },
    {
      "cells": [
        "ali shoki"
      ],
      "line": 18,
      "id": "employee-list-search;valid-employee-search-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4907053682,
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

  "duration": 1640971647,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Valid employee Search functionality",
  "description": "",
  "id": "employee-list-search;valid-employee-search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@empsearch"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on PIM Link and select Employee List option",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter \"abbas Azaad\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on search",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "confirm \"abbas Azaad\" is available at list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeListSteps.i_am_on_PIM_Link_and_select_AddEmployee_option()"
});
formatter.result({
  "duration": 1714792851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abbas Azaad",
      "offset": 12
    }
  ],
  "location": "EmployeeListSteps.user_enter_employee_name(String)"
});
formatter.result({
  "duration": 193886772,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeListSteps.click_on_search()"
});
formatter.result({
  "duration": 4427506875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abbas Azaad",
      "offset": 9
    }
  ],
  "location": "EmployeeListSteps.confirm_employee_is_available_at_list(String)"
});
formatter.result({
  "duration": 53003008,
  "status": "passed"
});
formatter.after({
  "duration": 766722447,
  "status": "passed"
});
formatter.before({
  "duration": 4433972576,
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
  "duration": 1301126141,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Valid employee Search functionality",
  "description": "",
  "id": "employee-list-search;valid-employee-search-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@empsearch"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on PIM Link and select Employee List option",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter \"mamad Raha\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on search",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "confirm \"mamad Raha\" is available at list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeListSteps.i_am_on_PIM_Link_and_select_AddEmployee_option()"
});
formatter.result({
  "duration": 1329080172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mamad Raha",
      "offset": 12
    }
  ],
  "location": "EmployeeListSteps.user_enter_employee_name(String)"
});
formatter.result({
  "duration": 218558131,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeListSteps.click_on_search()"
});
formatter.result({
  "duration": 4420452295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mamad Raha",
      "offset": 9
    }
  ],
  "location": "EmployeeListSteps.confirm_employee_is_available_at_list(String)"
});
formatter.result({
  "duration": 261233722,
  "status": "passed"
});
formatter.after({
  "duration": 767801846,
  "status": "passed"
});
formatter.before({
  "duration": 4051738435,
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
  "duration": 1341916634,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Valid employee Search functionality",
  "description": "",
  "id": "employee-list-search;valid-employee-search-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@empsearch"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on PIM Link and select Employee List option",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enter \"ali shoki\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on search",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "confirm \"ali shoki\" is available at list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeListSteps.i_am_on_PIM_Link_and_select_AddEmployee_option()"
});
formatter.result({
  "duration": 1245753503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ali shoki",
      "offset": 12
    }
  ],
  "location": "EmployeeListSteps.user_enter_employee_name(String)"
});
formatter.result({
  "duration": 201990388,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeListSteps.click_on_search()"
});
formatter.result({
  "duration": 4449433123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ali shoki",
      "offset": 9
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
  "location": "EmployeeListSteps.confirm_employee_is_available_at_list(String)"
});
formatter.result({
  "duration": 287345847,
  "status": "passed"
});
formatter.after({
  "duration": 782368596,
  "status": "passed"
});
});