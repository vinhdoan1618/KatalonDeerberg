$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vntdoan/Katalon Studio/DEE-Test/Include/features/LoginSucessful .feature");
formatter.feature({
  "name": "Login",
  "description": "  I want to use this test login function",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I am on \u0027Deerberg account\u0027 site",
  "keyword": "Given "
});
formatter.step({
  "name": "I input email \u0027vinhdoanngocthe+10@gmail.com\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I input password \u0027123123123\u0027",
  "keyword": "And "
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
        "name",
        "value",
        "status"
      ]
    },
    {
      "cells": [
        "name1",
        "1",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I am on \u0027Deerberg account\u0027 site",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I input email \u0027vinhdoanngocthe+10@gmail.com\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Login.I_input_email_with_value(Object)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input password \u0027123123123\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "Login.I_input_password_with_value(Object)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.I_click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will navigate to account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.I_will_navigate_to_account_page()"
});
formatter.result({
  "status": "skipped"
});
});