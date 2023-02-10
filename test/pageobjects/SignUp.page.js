import Page from './Page.js';
import { email, fullName, password } from "../../src/testData.js"

class SignUp extends Page {

    elements = {
        createAccountBtn: () => $('button[type="submit"]'),
        emailErorMmssage: () => $('[id="email_error"]'),
        fullNameErorMmssage: () => $('[id="full_name_error"]'),
        workEmail: () => $('[id="email"]'),
        fullName: () => $('[id="full_name"]'),
        password: () => $('[id="password"]'),
        errorMessages: () => $('[class="sc-570b157-1 eUoKGn"]'),
        havePromoCode: () => $('[class="sc-5d3a275a-24 sc-5d3a275a-25 iXlaXw giQHLy"]'),
        promoCodeField: () => $('[id="promo_code"]'),
        logInLinkText: () => $('[href="https://portal.telnyx.com/#"]'),
        forgotPasswordLinkText: () => $('[href="/#/login/password-reset"]'),
    }

    async createAccountBtnClick() {
        await this.elements.createAccountBtn().click();
    }
    async createAccount () {
        await this.elements.workEmail().setValue(email);
        await this.elements.fullName().setValue(fullName);
        await this.elements.password().setValue(password);
        await this.elements.createAccountBtn().click();
    }
    async havePromoCodeClick() {
        await this.elements.havePromoCode().click();
    }
    async LogInLinkTextClick() {
        await this.elements.logInLinkText().click();
    }
    async clickForgotPasswordLinkText() {
        await this.elements.forgotPasswordLinkText().click();
    }
    open(path) {
        return super.open(path);
    }
}

export default new SignUp();
