const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {
    it('should load the web page', async () => {

        await browser.url('./')
        await expect(browser).toHaveUrl('/login')
        /*
        await browser.url('http://localhost:3000')

        await expect($('#display-1')).toBeExisting()
        await expect($('#display-1')).toHaveTextContaining(
            'Hello World')
            */
    })
})

