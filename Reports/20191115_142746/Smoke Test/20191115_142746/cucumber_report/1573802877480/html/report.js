$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vntdoan/KatalonDeerberg/Include/features/LoginFunction .feature");
formatter.feature({
  "name": "Login",
  "description": "  I want to use this to test login function",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login failed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on \u0027Deerberg account\u0027 site",
  "keyword": "Given "
});
formatter.step({
  "name": "I input \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "Error Message will be show",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "vinhdoanngocthe+3@gmail.com",
        "123456789"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login failed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on \u0027Deerberg account\u0027 site",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.I_am_on_Deerberg_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input vinhdoanngocthe+3@gmail.com and 123456789",
  "keyword": "When "
});
formatter.match({
  "location": "Login.I_input_email_with_value(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.I_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error Message will be show",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.Error_message_will_be_show()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on \u0027Deerberg account\u0027 site",
  "keyword": "Given "
});
formatter.step({
  "name": "I input \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I will navigate to account page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "vinhdoanngocthe+1@gmail.com",
        "123123123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on \u0027Deerberg account\u0027 site",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.I_am_on_Deerberg_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input vinhdoanngocthe+1@gmail.com and 123123123",
  "keyword": "When "
});
formatter.match({
  "location": "Login.I_input_email_with_value(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.I_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will navigate to account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.I_will_navigate_to_account_page()"
});
formatter.result({
  "status": "passed"
});
});