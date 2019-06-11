const assert = require('assert');
const { Given } = require('cucumber');


Given("User open the site: {string}", function(url1) {
    browser.url(url1);
});