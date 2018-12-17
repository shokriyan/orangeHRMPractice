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
  "duration": 4674434716,
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
  "duration": 351192449,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 668068659,
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
  "duration": 34854227,
  "status": "passed"
});
formatter.after({
  "duration": 743328919,
  "status": "passed"
});
formatter.before({
  "duration": 4175102498,
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
  "duration": 192324124,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 312661253,
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
  "duration": 39299263,
  "status": "passed"
});
formatter.after({
  "duration": 728032591,
  "status": "passed"
});
formatter.before({
  "duration": 3942141836,
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
  "duration": 179148105,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 91236985,
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
  "duration": 33430567,
  "status": "passed"
});
formatter.after({
  "duration": 732648688,
  "status": "passed"
});
formatter.before({
  "duration": 3851444978,
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
  "duration": 176895651,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 95276177,
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
  "duration": 36489149,
  "status": "passed"
});
formatter.after({
  "duration": 732576415,
  "status": "passed"
});
formatter.before({
  "duration": 3818401866,
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
  "duration": 177681252,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_button()"
});
formatter.result({
  "duration": 109755257,
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
  "duration": 42643090,
  "status": "passed"
});
formatter.after({
  "duration": 737890870,
  "status": "passed"
});
});