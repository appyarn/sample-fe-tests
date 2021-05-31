module.exports = {

  //Opening link in URL and closing Alert modal window
  "Opening URL": function (browser) {
   browser
     .url("https://pgsmvc.tiarc-staging.co.uk/")
     .waitForElementVisible('body')

     .click("body > div.custom-popup.popup-alert.opened > div.cp__inner > div > div > div > div.close-popup.close-popup-js > div")
     
       .maximizeWindow()
       .pause(2*1000)
    .click("body > div.header.header-fixed.mtHeader.visible > ul")
 
    .click("body > div.header.header-fixed.mtHeader.visible > ul > li:nth-child(1)")
     .click("body > div.header.header-fixed.mtHeader.visible > ul > li:nth-child(1) > a")
     
     .end();
 },



  
};
