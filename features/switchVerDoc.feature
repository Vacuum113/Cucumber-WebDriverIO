Feature: Switching to different version of API 
  As user of Vue.js site 
  I want to switch to different version of API documentation on https://vuejs.org/v2/api/ page. 

  Scenario Outline: Switch versions 
  Given User open the site: "https://vuejs.org/v2/api/" 
  When User select the option  <counter> with the value <number> for element select: '.version-select'
  Then User expects to receive API version <number> documentation on the site with url: <url>

 Examples:
  | number |              url             |counter|
  |  "1"   | "https://v1.vuejs.org/api/"  |   1   |
  | "0.12" | "https://012.vuejs.org/api/" |   2   |
  | "0.11" | "https://011.vuejs.org/api/" |   3   |