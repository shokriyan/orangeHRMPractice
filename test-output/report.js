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
  "description": "",
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
<<<<<<< HEAD
  "duration": 4866472440,
=======
  "duration": 4907053682,
>>>>>>> 6494e61ff42863fd0d4c62419faa06bc468e102b
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
<<<<<<< HEAD
  "duration": 1773198372,
=======
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
>>>>>>> 6494e61ff42863fd0d4c62419faa06bc468e102b
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
<<<<<<< HEAD
  "duration": 1316016282,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Error massage for blank job title",
  "description": "",
  "id": "jobs-feature;error-massage-for-blank-job-title",
=======
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
>>>>>>> 6494e61ff42863fd0d4c62419faa06bc468e102b
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
<<<<<<< HEAD
      "line": 17,
      "name": "@titleError"
=======
      "line": 7,
      "name": "@empsearch"
>>>>>>> 6494e61ff42863fd0d4c62419faa06bc468e102b
    }
  ]
});
formatter.step({
<<<<<<< HEAD
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
=======
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
>>>>>>> 6494e61ff42863fd0d4c62419faa06bc468e102b
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 6494e61ff42863fd0d4c62419faa06bc468e102b
  "status": "passed"
});
});