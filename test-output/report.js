$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
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
formatter.scenarioOutline({
  "line": 11,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user cannot successfully login and received message \"\u003cerrorMsg\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
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
      "line": 17,
      "id": "login-to-orang-hrm-page;invalid-login;;1"
    },
    {
      "cells": [
        "Admin",
        "admin321",
        "Invalid credentials"
      ],
      "line": 18,
      "id": "login-to-orang-hrm-page;invalid-login;;2"
    },
    {
      "cells": [
        "admins",
        "admin123",
        "Invalid credentials"
      ],
      "line": 19,
      "id": "login-to-orang-hrm-page;invalid-login;;3"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 20,
      "id": "login-to-orang-hrm-page;invalid-login;;4"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 21,
      "id": "login-to-orang-hrm-page;invalid-login;;5"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 22,
      "id": "login-to-orang-hrm-page;invalid-login;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6018743646,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enter \"Admin\" and \"admin321\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
  "duration": 416581599,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 614135504,
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
  "duration": 42426697,
  "status": "passed"
});
formatter.after({
  "duration": 756011853,
  "status": "passed"
});
formatter.before({
  "duration": 4068334403,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enter \"admins\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
  "duration": 209736484,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 397763968,
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
  "duration": 43776373,
  "status": "passed"
});
formatter.after({
  "duration": 739439833,
  "status": "passed"
});
formatter.before({
  "duration": 4167169089,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enter \"\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
  "duration": 185104897,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 102916643,
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
  "duration": 39897551,
  "status": "passed"
});
formatter.after({
  "duration": 772130560,
  "status": "passed"
});
formatter.before({
  "duration": 4166394180,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enter \"Admin\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
  "duration": 185106180,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 102237528,
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
  "duration": 33486590,
  "status": "passed"
});
formatter.after({
  "duration": 741595637,
  "status": "passed"
});
formatter.before({
  "duration": 4034398776,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "invalid login",
  "description": "",
  "id": "login-to-orang-hrm-page;invalid-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@invalidLog"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enter \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
  "duration": 156703541,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 99636537,
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
  "duration": 35881453,
  "status": "passed"
});
formatter.after({
  "duration": 750290271,
  "status": "passed"
});
});