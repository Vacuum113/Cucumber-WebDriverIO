Feature: Old version of the documentation API should display a notification
  As user of Vue.js site "https://vuejs.org/"
  I want to be notified, if I visit an older version of API documentation
  Also there should be a link to a newer version of API documentation

  Scenario Outline: Notification should be displayed
    Given User open the site: "https://vuejs.org"
    When User selects the Learn link in the navigation bar
    And User clicks on the API link in the drop-down menu
    And User select the option  <counter> with the value <number> for element select: '.version-select'
    Then User expect to see a notification that this is the old version <counter> of the API
    And Also user expect to see link to a newer version of API documentation. <counter>

 Examples:
  | number |counter|
  |  "1"   |   1   |
  | "0.12" |   2   |
  | "0.11" |   3   |