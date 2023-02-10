import Page from '../pageobjects/Page.js'
import SignUp from '../pageobjects/SignUp.page.js'
import MainPage from '../pageobjects/Main.page.js'
import HomeSwitch from '../pageobjects/HomeSwitch.page.js'
import Developers from '../pageobjects/Developers.page.js'

describe('My test set', () => {

    beforeEach("Cookies accept", async () => {
        const page = new Page();
        await page.open();
        await browser.maximizeWindow();
        page.closeCookies();
    });

    it('TEL_001 Checking the availability of a phone number in the “Call Us” tab', async () => {
        await MainPage.callUs();
        await expect(MainPage.elements.phoneNumber()).toBeDisplayed();
    });
    it('TEL_002 Checking the transition to the “Support Center“ page after clicking on the corresponding button', async () => {
        await MainPage.supportCenterBtnClick();
        await expect(MainPage.elements.supportCenterLabel()).toHaveText("Support Center");
    });
    it('TEL_003 Checking the transition to the “Log in“ page after clicking on the corresponding button', async () => {
        await MainPage.logInBtnClick()
        await expect(MainPage.elements.logInLabelCheck()).toHaveTextContaining("Log in");       
    });
    it('TEL_004 Checking the transition to the “Talk to an expert“ page after clicking on the corresponding button', async () => {
        await MainPage.TalkToAnExpertButtonClick()
        await expect(MainPage.elements.TalkToAnExpertLabel()).toHaveTextContaining("Talk to an expert");       
    });
    it('TEL_005 Checking the transition to the “Sign Up“ page after clicking on the corresponding button', async () => {
        await MainPage.SignUpButtonClick()
        await expect(MainPage.elements.SignUpLabel()).toHaveTextContaining("Create a free account");       
    });
    it('TEL_006 Checking the visibility and availability of the “Connect on LinkedIn“ label link in the footer right corner of the main page', async () => {
        await MainPage.ScrollToLinkedInLink()
        await expect(MainPage.elements.LinkedInLink()).toBeDisplayed();       
        await expect(MainPage.elements.LinkedInLink()).toHaveHref("https://www.linkedin.com/company/telnyx/");       
    });
    it('TEL_007 Checking the visibility and availability of the “Follow on Twitter“ label link in the footer right corner of the main page', async () => {
        await MainPage.ScrollToTwitterLink()
        await expect(MainPage.elements.TwitterLink()).toBeDisplayed();       
        await expect(MainPage.elements.TwitterLink()).toHaveHref("https://twitter.com/telnyx");       
    });
    it('TEL_008 Checking the visibility and availability of the “Follow on Facebook“ label link in the footer right corner of the main page', async () => {
        await MainPage.ScrollToTwitterLink()
        await expect(MainPage.elements.FacebookLink()).toBeDisplayed();       
        await expect(MainPage.elements.FacebookLink()).toHaveHref("https://www.facebook.com/Telnyx/");       
    });
    it('TEL_009 Checking the transition to the “sign up“ page and the visibility of the email in the “Work email“ field', async () => {
        await MainPage.tryForFreeBtnClick()      
        await expect(browser).toHaveUrlContaining("https://telnyx.com/sign-up");       
    });
    it('TEL_010 Checking the appearance of error messages when registering a user without entering personal data', async () => {
        await MainPage.elements.tryForFreeBtn().click()
        await SignUp.createAccountBtnClick()
        await expect(SignUp.elements.emailErorMmssage()).toHaveTextContaining("This field is required.");              
    });
    it('TEL_011 Checking the appearance of error messages when registering a user without accept the terms and conditions', async () => {
        await MainPage.elements.tryForFreeBtn().click()
        await SignUp.createAccount()
        await expect(SignUp.elements.errorMessages()).toHaveTextContaining("Please accept the terms and conditions");              
    });
    it('TEL_012 Checking the appearance of the "promo code" field', async () => {
        await MainPage.elements.tryForFreeBtn().click()
        await SignUp.havePromoCodeClick()
        await expect(SignUp.elements.promoCodeField()).toBeDisplayed();              
    });
    it('TEL_013 Checking the transition to the "Password Reset page"', async () => {
        await MainPage.elements.tryForFreeBtn().click()
        await SignUp.LogInLinkTextClick()
        await expect(browser).toHaveTitle("Login / Telnyx Customer Portal");
        await SignUp.clickForgotPasswordLinkText()
        await expect(browser).toHaveTitle("Password Reset / Telnyx Customer Portal");             
    });
    it('TEL_014 Checking the visibility and clickability of the inscription "Switch + Save with Telnyx" in the middle of the main page', async () => {
        await HomeSwitch.saveWithTelnyxCheck()
        await expect(HomeSwitch.elements.saveWithTelnyx()).toBeDisplayed();
        await expect(HomeSwitch.elements.saveWithTelnyx()).toBeClickable();                    
    });
    it('TEL_015 Checking the price change after pressing the "SMS" button in the block "How much will you save?"', async () => {
        await HomeSwitch.saveWithTelnyxCheck()
        await HomeSwitch.SMSButtonClick()
        await expect(HomeSwitch.elements.SaveUpPerMonth()).toHaveTextContaining("Save up to $2223 per month"); 
             
    });
    it('TEL_016 Checking the price change after clicking the "Toll-free numbers and "No" radio buttons in the block "How much will you save?"', async () => {
        await HomeSwitch.saveWithTelnyxCheck()
        await HomeSwitch.ProgrammableVoiceClick()
        await expect(HomeSwitch.elements.TwilioCost()).toHaveTextContaining("$2,175");        
    });
    it('TEL_017 Checking the transition to the "Developerst" page', async () => {
        await Developers.learnMoreBtnCheck()
        await expect(browser).toHaveTitle("Telnyx Developers");        
    });
    it('TEL_018 Checking for the text "Telnyx API Reference" after clicking the "API Reference" button', async () => {
        await Developers.learnMoreBtnCheck()
        await Developers.ApiReferenceBtnClick()
        await expect(Developers.elements.TelnyxApiReference()).toBeDisplayed();         
    });
    it('TEL_019 Checking the transition to the "Messaging" page', async () => {
        await Developers.learnMoreBtnCheck()
        await Developers.messagingBlocClick() 
        await expect(browser).toHaveUrlContaining("https://developers.telnyx.com/docs/v2/messaging");        
    });
    it('TEL_020 Checking the transition to the "Messaging" page', async () => {
        await Developers.open("https://developers.telnyx.com/docs/v2/messaging")
        await Developers.liveChatCheck() 
        await expect(Developers.elements.liveChat()).toBeClickable();          
    });
})


