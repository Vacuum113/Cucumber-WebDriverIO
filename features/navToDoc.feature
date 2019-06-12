Feature: Reading different API versions 
    As user of Vue.js site
    I want to have an opportunity to read API documentation of different versions

Scenario: Navigation to documentation through the navigation menu
  Given User open the site: "https://vuejs.org"
  When User selects the Learn link in the navigation bar
  And User clicks on the API link in the drop-down menu
  Then User expects to see a page with the title "API — Vue.js"