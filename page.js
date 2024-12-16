module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumberField: '#number',
    expirationField: '#expiration',
    messageField: '#comment',
    cvvField: '.card-code-input #code',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportivePlanButton: 'div=Supportive',
    addCardButton: 'div.pp-title=Add card',
    linkButton: 'button=Link',
    blanketButton: '.switch',
    iceCreamButton: 'div=+',
    searchCarButton: '.smart-button',
    iceCreamCounter: 'div=2',
    business: 'div=Business',
    linkCardButton: 'div=Card',
    paymentMethodButton: '.pp-text',
    blanketSelector: '.switch-input',
    // Modals
    phoneNumberModal: '.modal',
    cardModal: '.card-modal',
    carSearchModal: 'div=Car search',
    driverInfoModal: 'div*=The driver will arrive',

    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        const requests = await browser.getRequests();
        await expect(requests.length).toBe(1);
        const code = await requests[0].response.body.code;
        await codeField.setValue(code);
        await $(this.confirmButton).click();
    },

    async selectSupportivePlan() {
        const supportivePlanButton = await $(this.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
    },

    async addCreditCard(cardNumber, cvv) {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.waitForDisplayed();
        await cardNumberField.setValue(cardNumber);
        const cvvField = await $(this.cvvField);  
        await cvvField.waitForDisplayed();
        await cvvField.setValue(cvv);
        await browser.keys('Tab');
        const linkButton = await $(this.linkButton);
        await linkButton.waitForClickable();
        await linkButton.click();
    },

    async enterDriverMessage(message) {
        const messageField = await $(this.messageField);
        await messageField.setValue(message);
    },

    async selectExtras(extraType) {
        const extraButton = await $(this.blanketButton);
        await extraButton.click();
    },

     async startCarSearch() {
        const business = await $(this.business);
        await business.waitForDisplayed();
        await business.click();
        const searchCarButton = await $(this.searchCarButton);
        await searchCarButton.waitForDisplayed();
        await searchCarButton.click();
    },

    async waitForDriverInfo() {
        const driverInfoModal = await $(this.driverInfoModal);  
        await driverInfoModal.waitForDisplayed({ timeout: 40000 });
    },
    async addIceCream() {
        const supportivePlanButton = await $(this.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        const iceCreamButton = await $(this.iceCreamButton);
        await iceCreamButton.waitForDisplayed();
        await iceCreamButton.click();  
        await iceCreamButton.click(); 
    }
    
}
    