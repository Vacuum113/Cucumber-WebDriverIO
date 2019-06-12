const assert = require('assert');
const { Then } = require('cucumber');


Then("User expects to see a page with the title {string}", function(string1) {
    let title;

    browser.waitUntil(function() {
        return (title = browser.getTitle()) == string1;
    }, 5000);

    assert.equal(title, string1);
});

Then("User expects to receive API version {string} documentation on the site with url: {string}", function(vers, string1) {
    assert.equal(browser.getUrl(), string1);
});

Then('User expect to see a notification that this is the old version of the API', function() {
    let notification = $('body > div:nth-child(9)');

    if (!(notification.$('a').getText() === 'click here.'))
        notification = $('body> div:nth-child(7)');

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