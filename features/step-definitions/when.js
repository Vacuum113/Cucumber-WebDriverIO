const assert = require('assert');
const { When } = require('cucumber');


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


When("User select the option  {int} with the value {string} for element select: {string}", function(int1, string1, string2) {
    let versionSelect;
    browser.waitUntil(function() {
        return (versionSelect = $(string2));
    }, 5000);
    versionSelect.click();

    let optionTag;
    browser.waitUntil(function() {
        return (optionTag = versionSelect.$$('option')[int1]);
    }, 5000);
    optionTag.click();
});