

document.addEventListener('DOMContentLoaded', function() {
  

  // SITEMAP js


  // Using Google.com for on-site SEARCH box
  // Code from https://pagedart.com/blog/how-to-add-a-search-bar-in-html/
  
  var f = document.getElementById('gform');  //form
  var q = document.getElementById('search');  //text entered


  const google = 'https://www.google.com/search?q=site%3A+';
  const site = 'anise-design.github.io'; 
  //our website which is currently being indexed by Google

  function submitted(event) {
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
  }

  f.addEventListener('submit', submitted);
 



  // Alert box to feedback on user action for NEWSLETTER SUBSCRIBE

  var clickButton = document.getElementById('button'); //button
  var subscribeText = document.getElementById('email'); //text entered

  
  clickButton.addEventListener('click', function(event) {

    if (subscribeText && subscribeText.value) {
      alert("Thank you for subscribing.");
    } else {
      // Tell user no search text entered
      alert("No email entered. Try again.");
    }
       
  });


  // End of SITEMAP js

  
  

















  
}) /**** End of File ***** DO NOT DELETE *****/