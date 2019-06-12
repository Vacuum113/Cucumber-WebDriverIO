const assert = require('assert');
const { Then } = require('cucumber');


Then("User expects to see a page with the title {string}", function(string1) {
    let title;

    browser.waitUntil(function() {
        return browser.getTitle() == string1;
    }, 5000);

    title = browser.getTitle()
    assert.equal(title, string1);
});

Then("User expects to receive API version {string} documentation on the site with url: {string}", function(vers, string1) {
    browser.waitUntil(function() {
        return (browser.getUrl() == string1);
    }, 5000);

    assert.equal(browser.getUrl(), string1);
});

Then('User expect to see a notification that this is the old version {int} of the API', function(counter) {

    browser.pause(3000);

    let notification = $('body > div:nth-child(9)');

    if (+counter !== 1)
        notification = $('body > div:nth-child(7)');
    else if (+counter !== 2) {
        notification = $('body > div:nth-child(7)');
    }

    assert.equal(notification.$('a').getText(), 'click here.');
});

Then('Also user expect to see link to a newer version of API documentation. {int}', function(counter) {

    browser.pause(3000);

    let notificationLink = $('body > div:nth-child(9)').$('a');

    if (+counter !== 1)
        notificationLink = $('body > div:nth-child(7)');
    else if (+counter !== 2) {
        notificationLink = $('body > div:nth-child(7)');
    }

    notificationLink.click();

    browser.switchTab(browser.getTabIds()[1]);

    browser.waitUntil(function() {
        return browser.getTitle() === 'Introduction — Vue.js';
    }, 5000);

    let title = browser.getTitle();
    browser.close();

    assert.equal(title, 'Introduction — Vue.js');
});