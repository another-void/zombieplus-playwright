const { expect } = require('@playwright/test');

export class Toast {

    constructor(page){
        this.page = page;
    }

    async containText(message){
        /* await this.page.getByText('seus dados conosco').click;
        const content = await this.page.content();
        console.log(content); */                    //para propósito de debug, para capturar os dados do html
        const toast = this.page.locator('.toast')

        await expect(toast).toContainText(message);
        await expect(toast).not.toBeVisible({ timeout: 5000 });
        //await this.page.waitForTimeout(5000);
    }
}