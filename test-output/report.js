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
  "duration": 4563975137,
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
  "duration": 2178392726,
  "status": "passed"
});
formatter.match({
  "location": "JobsSteps.user_on_job_page()"
});
formatter.result({
  "duration": 1649755023,
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
  "name": "user fill up information",
  "rows": [
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
      "cells": [
        "Scrum Master"
      ],
      "line": 13
    },
    {
      "cells": [
        "Developer"
      ],
      "line": 14
    }
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
  "duration": 3646307873,
  "status": "passed"
});
formatter.match({
  "location": "JobsSteps.user_log_out()"
});
formatter.result({
  "duration": 601423080,
  "status": "passed"
});
formatter.after({
  "duration": 135935139,
  "status": "passed"
});
});