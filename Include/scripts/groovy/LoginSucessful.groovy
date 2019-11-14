import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


class Login {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("I am on 'Deerberg account' site")
	def I_am_on_Deerberg_site() {
		WebUI.openBrowser('https://www.deerberg.de/user/login-show')
//		WebUI.navigateToUrl('https://www.deerberg.de/user/login-show')
		WebUI.maximizeWindow()
		WebUI.click(findTestObject("Object Repository/HomePage/Cookie_agree_btn"))
	}

	@When("I input (.*) and (.*)")
	def I_input_email_with_value(String email, String password){
		WebUI.waitForElementVisible(findTestObject("Object Repository/LoginPage/input_E-Mail"), 5)
		WebUI.setText(findTestObject("Object Repository/LoginPage/input_E-Mail"), email)
		WebUI.waitForElementVisible(findTestObject("Object Repository/LoginPage/input_Passwort"), 5)
		WebUI.setText(findTestObject("Object Repository/LoginPage/input_Passwort"), password)
	}
	@And("I click on Login button")
	def I_click_on_Login_button(){
		WebUI.click(findTestObject("Object Repository/LoginPage/Login_btn"))
	}
	@Then("I will navigate to account page")
	def I_will_navigate_to_account_page(){
		assert WebUI.getText(findTestObject("Object Repository/UserPage/User_name")) == "Hallo vinh doan"
	}
}