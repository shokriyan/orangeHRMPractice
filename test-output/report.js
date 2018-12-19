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
        "Alejandra I."
      ],
      "line": 16,
      "id": "employee-list-search;valid-employee-search-functionality;;2"
    },
    {
      "cells": [
        "Johnny S."
      ],
      "line": 17,
      "id": "employee-list-search;valid-employee-search-functionality;;3"
    },
    {
      "cells": [
        "Donald"
      ],
      "line": 18,
      "id": "employee-list-search;valid-employee-search-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3205489302,
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
  "duration": 1478466801,
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
  "name": "user enter \"Alejandra I.\"",
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
  "name": "confirm \"Alejandra I.\" is available at list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeListSteps.i_am_on_PIM_Link_and_select_AddEmployee_option()"
});
formatter.result({
  "duration": 2255134161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alejandra I.",
      "offset": 12
    }
  ],
  "location": "EmployeeListSteps.user_enter_employee_name(String)"
});
formatter.result({
  "duration": 189088749,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeListSteps.click_on_search()"
});
formatter.result({
  "duration": 985782576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alejandra I.",
      "offset": 9
    }
  ],
  "location": "EmployeeListSteps.confirm_employee_is_available_at_list(String)"
});
formatter.result({
  "duration": 222471787,
  "status": "passed"
});
formatter.after({
  "duration": 90632633,
  "status": "passed"
});
formatter.before({
  "duration": 2065573701,
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
  "duration": 1196353593,
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
  "name": "user enter \"Johnny S.\"",
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
  "name": "confirm \"Johnny S.\" is available at list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeListSteps.i_am_on_PIM_Link_and_select_AddEmployee_option()"
});
formatter.result({
  "duration": 1237444392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johnny S.",
      "offset": 12
    }
  ],
  "location": "EmployeeListSteps.user_enter_employee_name(String)"
});
formatter.result({
  "duration": 163085499,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeListSteps.click_on_search()"
});
formatter.result({
  "duration": 829515511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johnny S.",
      "offset": 9
    }
  ],
  "location": "EmployeeListSteps.confirm_employee_is_available_at_list(String)"
});
formatter.result({
  "duration": 283459440,
  "status": "passed"
});
formatter.after({
  "duration": 96412334,
  "status": "passed"
});
formatter.before({
  "duration": 2353434549,
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
  "duration": 4005264062,
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
  "name": "user enter \"Donald\"",
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
  "name": "confirm \"Donald\" is available at list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeListSteps.i_am_on_PIM_Link_and_select_AddEmployee_option()"
});
formatter.result({
  "duration": 2201766739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Donald",
      "offset": 12
    }
  ],
  "location": "EmployeeListSteps.user_enter_employee_name(String)"
});
formatter.result({
  "duration": 178882996,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeListSteps.click_on_search()"
});
formatter.result({
  "duration": 415994808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Donald",
      "offset": 9
    }
  ],
  "location": "EmployeeListSteps.confirm_employee_is_available_at_list(String)"
});
formatter.result({
  "duration": 255943587,
  "status": "passed"
});
formatter.after({
  "duration": 92601604,
  "status": "passed"
});
});