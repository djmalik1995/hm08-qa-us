const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
    });

    it('should save the phone', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await $(`div=${phoneNumber}`)).toBeExisting();
    });

    it('should select supportive plan', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
       
    });

    it('should add a credit card', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addCreditCard('411111111111', '12');
        const cardLinkedMessage = await $(page.linkCardButton);
        await expect(cardLinkedMessage).toBeExisting();
    });

    it('should write a message for the driver', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.enterDriverMessage('Please drive carefully.');
        const messageField = await $(page.messageField);
        await expect(messageField).toHaveValueContaining('Please drive carefully.');
    });

    it('should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectExtras(); 
        const extrasState = await $(page.blanketSelector); 
        await expect(extrasState).toBeChecked();
     });

    it('should order 2 ice creams', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addIceCream();
        const iceCreamCount = await $(page.iceCreamCounter);
        await expect(iceCreamCount).toBeExisting();
    });

    it('should open car search modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.startCarSearch();
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        await expect(carSearchModal).toBeExisting();
    });
   
    it('should open driver info modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.startCarSearch();
        await page.waitForDriverInfo();
        const driverInfo = await $(page.driverInfoModal);
        await driverInfo.waitForDisplayed();
        await expect(driverInfo).toBeExisting();
    });
   
    it('should set the address', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const fromField = await $(page.fromField);
        await expect(fromField).toHaveValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await expect(toField).toHaveValue('1300 1st St');
        
        
    });
    
    
});

