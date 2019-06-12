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

    browser.waitUntil(function() {
        return $('=click here.').getText() === 'click here.';
    }, 5000);

    let notification = $('=click here.');

    assert.equal(notification.$('a').getText(), 'click here.');
});

Then('Also user expect to see link to a newer version of API documentation. {int}', function(counter) {
    browser.waitUntil(function() {
        return $('=click here.').getText() === 'click here.';
    }, 5000);

    let notificationLink = $('=click here.');

    notificationLink.click();

    browser.switchTab(browser.getTabIds()[0]);
    browser.switchTab(browser.getTabIds()[1]);

    browser.waitUntil(function() {
        return browser.getTitle() === 'Introduction — Vue.js';
    }, 5000);

    let title = browser.getTitle();
    browser.close();

    assert.equal(title, 'Introduction — Vue.js');
});