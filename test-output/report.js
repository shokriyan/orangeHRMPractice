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
formatter.step({
  "line": 14,
  "name": "verifying employee added and see \"\u003cprofilename\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "23",
  "id": "add-employee-on-orange-hrm;add-employee-and-confirm;",
  "rows": [
    {
      "cells": [
        "firstname",
        "middlename",
        "lastname",
        "profilename"
      ],
      "line": 19,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;1"
    },
    {
      "cells": [
        "Andre",
        "I.",
        "Ramirez",
        "Andrea Ramirez"
      ],
      "line": 20,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;2"
    },
    {
      "cells": [
        "Johnny",
        "S.",
        "Walker",
        "Johnny Walker"
      ],
      "line": 21,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;3"
    },
    {
      "cells": [
        "Bruce",
        "",
        "Lee",
        "Bruce Lee"
      ],
      "line": 22,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;4"
    },
    {
      "cells": [
        "Donald",
        "",
        "Trump",
        "Donald Trump"
      ],
      "line": 23,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;5"
    },
    {
      "cells": [
        "Steven",
        "A.",
        "Spielberg",
        "Steven Spielberg"
      ],
      "line": 24,
      "id": "add-employee-on-orange-hrm;add-employee-and-confirm;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10917936557,
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
  "duration": 2328214634,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Add Employee and confirm",
  "description": "23",
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
formatter.step({
  "line": 14,
  "name": "verifying employee added and see \"Andrea Ramirez\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_on_PIM_Link_and_select_AddEmployee_option()"
});
