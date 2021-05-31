module.exports = {

  //Opening link in URL and closing Alert modal window
  "Opening URL": function (browser) {
   browser
     .url("https://pgsmvc.tiarc-staging.co.uk/")
     .waitForElementVisible('body')

     .click("body > div.custom-popup.popup-alert.opened > div.cp__inner > div > div > div > div.close-popup.close-popup-js > div")
     
       .maximizeWindow()
    
   

.assert.visible("#intSFader-1 > div.slide-description > h2",'Verify:Collabortaion is visible')

.assert.visible("body > div.custom-carousel-slider > div.cms-description > div > h2",'Verify text: A JOYFUL LOVE OF LEARNING is present') 

.end();
 },



  
};
