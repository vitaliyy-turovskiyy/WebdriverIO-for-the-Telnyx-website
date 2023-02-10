import Page from './Page.js';

class HomeSwitch extends Page {

    elements = {
        saveWithTelnyx: () => $('h2 [class="mchNoDecorate"]', { timeout: 10000 }),
        SMSButton: () => $('[class="Button__StyledDefaultButton-vntg8h-0 hANPHj Button__SecondaryButton-vntg8h-4 fRjsZN"]'),
        SaveUpPerMonth: () => $('[class="sc-1a5981e5-15 OWFfB"]'),
        ProgrammableVoice: () => $('[id="no"]'),
        TwilioCost: () => $('[class="sc-1a5981e5-13 geBsjY"]'),
    }

    async saveWithTelnyxCheck() {
        await this.elements.saveWithTelnyx().scrollIntoView({ block: 'center', inline: 'center' });
    }
    async SMSButtonClick() {
        await this.elements.SMSButton().click({ timeout: 10000 });
    }
    async ProgrammableVoiceClick() {
        await this.elements.ProgrammableVoice().click({ timeout: 10000 });
    }
    open(path) {
        return super.open(path);
    }
}

export default new HomeSwitch();
