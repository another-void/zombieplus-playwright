const { test: base, expect } = require('@playwright/test');

const { Leads } = require('../pages/Leads');
const { Login } = require('../pages/Login');
const { Movies } = require ('../pages/Movies');
const { Toast } = require('../pages/Components');

/* landing: new Leads(page),
login: new Login(page),
movies: new Movies(page),
toast: new Toast(page) */

const test = base.extend({
    page: async ({page}, use) =>{
        
        const context = page

        context['leads'] = new Leads(page)
        context['login'] = new Login(page)
        context['movies'] = new Movies(page)
        context['toast'] = new Toast(page)

        await use(page)
    }
})

export { test, expect };
