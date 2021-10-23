$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/TF_bank_and_cash_New Account.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on signin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on bankAndcash",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters the accountTitle",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters the description",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters the initialBalance",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters the accountNumber",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters the contactPerson",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters the phone",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters the internetBankingURL",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks the submitButton",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 22,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5507169100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on signin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on bankAndcash",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters the accountTitle",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters the description",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters the initialBalance",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters the accountNumber",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters the contactPerson",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters the phone",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters the internetBankingURL",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks the submitButton",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankandCashStepsDefination.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1669845900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "BankandCashStepsDefination.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 364336700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "BankandCashStepsDefination.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 286487500,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_clicks_on_signin()"
});
formatter.result({
  "duration": 2053706500,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 3025193200,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_clicks_on_bankAndcash()"
});
formatter.result({
  "duration": 3201750200,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 1108562700,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_enters_the_accountTitle()"
});
formatter.result({
  "duration": 348240000,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_enters_the_description()"
});
formatter.result({
  "duration": 297682700,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_enters_the_initialBalance()"
});
formatter.result({
  "duration": 333938900,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_enters_the_accountNumber()"
});
formatter.result({
  "duration": 264291700,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_enters_the_contactPerson()"
});
formatter.result({
  "duration": 255410100,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_enters_the_phone()"
});
formatter.result({
  "duration": 280327600,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_enters_the_internetBankingURL()"
});
formatter.result({
  "duration": 308891900,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_clicks_the_submitButton()"
});
formatter.result({
  "duration": 1457516000,
  "status": "passed"
});
formatter.match({
  "location": "BankandCashStepsDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 46654300,
  "status": "passed"
});
});