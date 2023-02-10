import Page from './Page.js';

class Developers extends Page {

    elements = {
        learnMoreBtn: () => $('[class="sc-7b4ce54b-10 cZQSuZ"]'),
        ApiReferenceBtn: () => $('//*[@id="__next"]/div/header/div/div[1]/div/nav[1]/a[2]'),
        TelnyxApiReference: () => $('[class="sc-9c6b9c3c-0 eFmwRr"]'),
        messagingBloc: () => $('main [href="/docs/v2/messaging"]'),
        liveChat: () => $('[id="intercom_launcher"]'),     
    }

    async learnMoreBtnCheck() {
        await this.elements.learnMoreBtn().scrollIntoView();
        await this.elements.learnMoreBtn().click();
    }
    async ApiReferenceBtnClick() {
        await this.elements.ApiReferenceBtn().click();
    }
    async messagingBlocClick() {
        await this.elements.messagingBloc().click();
    }
    async liveChatCheck() {
        await this.elements.liveChat().scrollIntoView();
    }
    open(path) {
        return super.open(path);
    }
}

export default new Developers();
