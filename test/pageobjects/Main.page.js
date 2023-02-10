import Page from './Page.js';
import { email } from "../../src/testData.js"


class MainPage extends Page {

    elements = {
        callUsBtn: () => $('//*[@id="__next"]/div[1]/header/div[1]/div/div/button'),
        phoneNumber: () => $('[class="sc-d9b163cf-3 iBVdlS"]'),
        supportCenterBtn: () => $('#__next > div.sc-2e7b2fa9-0.eiIMbO > header > div.sc-ee0ec023-0.evHrfb > div > div > a:nth-child(3)'),
        supportCenterLabel: () => $('[class="header__headline"]'),
        LogInButton: () => $('//*[@id="__next"]/div[1]/header/div[1]/div/div/a[2]'),
        logInLabelCheck: () => $('[class="Text__makeText-sc-1l8eqw9-0 styles__Title-cLTxiZ kdiQwK hLpuFd"]'),
        TalkToAnExpertButton: () => $('li [href="/contact-us"]'),
        TalkToAnExpertLabel: () => $('[class="Text-sc-5o8owa-0 sc-3efef034-2 clNvhv cptehe"]'),
        SignUpButton: () => $('li [class="sc-5d3a275a-0 eKznVb"]'),
        SignUpLabel: () => $('[class="Text-sc-5o8owa-0 sc-1e9319a3-4 gkWopw gjiitA"]'),
        LinkedInLink: () => $('footer > div > div > div:nth-child(6) > div > ul > li:nth-child(1) > a'),
        TwitterLink: () => $('footer > div > div > div:nth-child(6) > div > ul > li:nth-child(2) > a'),
        FacebookLink: () => $('footer > div > div > div:nth-child(6) > div > ul > li:nth-child(3) > a'),
        emailField: () => $('[type="email"]'),
        tryForFreeBtn: () => $('button[type="submit"]'),
    }    
    /*get callUsBtn () {
        return $('//*[@id="__next"]/div[1]/header/div[1]/div/div/button');
    }
    get phoneNumber () {
        return $('[href="tel:+1-888-980-9750"][class="mchNoDecorate"]');
    }
    get supportCenterBtn () {
        return $('#__next > div.sc-2e7b2fa9-0.eiIMbO > header > div.sc-ee0ec023-0.evHrfb > div > div > a:nth-child(3)');
    }
    get supportCenterLabel () {
        return $('[class="header__headline"]');
    }
    get logInBtn () {
        return $('[href="https://portal.telnyx.com/?_gl=1*6szdhv*_ga*NzcwNDIzMjk0LjE2NzAyMzQzMjc.*_ga_ZPM4K1DLND*MTY3NTcyMjU0Mi4xMjIuMS4xNjc1NzIyNTUyLjUwLjAuMA.."]');
    }
    get logInLabel () {
        return $('[href="https://portal.telnyx.com/?_gl=1*6szdhv*_ga*NzcwNDIzMjk0LjE2NzAyMzQzMjc.*_ga_ZPM4K1DLND*MTY3NTcyMjU0Mi4xMjIuMS4xNjc1NzIyNTUyLjUwLjAuMA.."]');
    }*/
    
    async callUs() {
        await this.elements.callUsBtn().click();
    }
    async supportCenterBtnClick() {
        await this.elements.supportCenterBtn().click();
    }
    async logInBtnClick() {
        await this.elements.LogInButton().click();
    }
    async TalkToAnExpertButtonClick() {
        await this.elements.TalkToAnExpertButton().click();
    }
    async SignUpButtonClick() {
        await this.elements.SignUpButton().click();
    }
    async ScrollToLinkedInLink() {
        await this.elements.LinkedInLink().scrollIntoView();
    }
    async ScrollToTwitterLink() {
        await this.elements.TwitterLink().scrollIntoView();
    }
    async ScrollToFacebookLink() {
        await this.elements.FacebookLink().scrollIntoView();
    }
    async tryForFreeBtnClick() {
        await this.elements.emailField().setValue(email);
        await this.elements.tryForFreeBtn().click()
    }

    open(path) {
        return super.open(path);
    }
}

export default new MainPage();
