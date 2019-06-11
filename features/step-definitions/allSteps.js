const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given("User open the site: {string}", function(url1) {
    browser.url(url1);
});

When("User selects the Learn link in the navigation bar", function() {
    let linkLearn;
    browser.waitUntil(function() {
        return (linkLearn = $$('li.nav-dropdown-container')[0].$('a')).getText() === "Learn";
    }, 5000);
    linkLearn.moveToObject();
});

When("User clicks on the API link in the drop-down menu", function() {
    let linkAPI;
    browser.waitUntil(function() {
        return (linkAPI = $$('li.nav-dropdown-container')[0].$('ul').$$('a.nav-link')[1]).getText() === "API";
    }, 5000);
    linkAPI.moveToObject();
    linkAPI.click();
});

Then("User expects to see a page with the title {string}", function(string1) {
    let title;
    browser.waitUntil(function() {
        return (title = browser.getTitle()) == string1;
    }, 5000);
    assert.equal(title, string1);
});


When("User select the option  {int} with the value {string} for element select: {string}", function(int1, string1, string2) {
    let versionSelect;
    browser.waitUntil(function() {
        return (versionSelect = $(string2));
    }, 5000);
    versionSelecter.click();

    let optionTag;
    browser.waitUntil(function() {
        return (optionTag = versionSelecter.$$('option')[int1]);
    }, 5000);
    optionTag.click();
});

Then("User expects to receive API version {string} documentation on the site with url: {string}", function(vers, string1) {
    assert.equal(browser.getUrl(), string1);
});

Then('User expect to see a notification that this is the old version of the API', function() {
    let notification;
    if (!(notification = $('body > div:nth-child(9)'))) {
        notification = $('body> div:nth-child(13)');
    }
    assert.equal(notification.$('a').getText(), 'click here.');
});

Then('Also user expect to see link to a newer version of API documentation', function() {
    let notificationLink = $('body > div:nth-child(9)');
    notificationLink.$('a').click();
    browser.pause(1000);
    browser.switchTab(browser.getTabIds()[1]);
    let title = browser.getTitle();
    browser.close();
    assert.equal(title, 'Introduction — Vue.js');
});