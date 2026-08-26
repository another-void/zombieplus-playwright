const { expect } = require('@playwright/test');

export class Popup {

    constructor(page){
        this.page = page;
    }

    async haveText(message){
        /* await this.page.getByText('seus dados conosco').click;
        const content = await this.page.content();
        console.log(content); */                    //para propósito de debug, para capturar os dados do html
        const popup = this.page.locator('.swal2-html-container')

        await expect(popup).toContainText(message);
    }
}