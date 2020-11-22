

document.addEventListener('DOMContentLoaded', function() {
  // Your code here...

  // SITEMAP js


  // Checking user actions for SEARCH box
  var clickSearch = document.getElementById('searching'); //button
  var searchText = document.getElementById('search');  //text entered
  
  clickSearch.addEventListener('click', function(ev) {
    // When button is clicked...
    if (searchText && searchText.value) {
      // and text has been entered
      alert("Search in progress."); 
    } else {
      // Tell user no search text entered
      alert("No search entered");
    }    
  }); 


  // Alert box to indicate when email is entered

/*
  var textInput = document.getElementById('email');
  textInput.addEventListener('input', function(e) {
      alert("Email addressed entered.\nClick the 'Subscribe' button to complete.");
  });
  */

  // Another alert box to indicate when 'Subscribe' button is clicked
  var clickButton = document.getElementById('button'); //button
  var subscribeText = document.getElementById('email'); //text entered

  
  clickButton.addEventListener('click', function(event) {

    if (subscribeText && subscribeText.value) {
      alert("Thank you for subscribing");
    } else {
      // Tell user no search text entered
      alert("No email entered");
    }
       
  });


  // End of SITEMAP js

  
  

















  
}) /**** End of File ***** DO NOT DELETE *****/